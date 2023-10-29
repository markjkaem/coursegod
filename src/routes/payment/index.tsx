// import { Session } from "@auth/core/types";
import { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import Stripe from "stripe";
import db from "../../../drizzle/db";
import { users } from "../../../drizzle/schema";
import { eq } from "drizzle-orm";

export const onRequest: RequestHandler = async ({
  redirect,
  sharedMap,
  query,
  url,
  env,
}) => {
  const stripe = new Stripe(env.get("STRIPE_TEST_KEY")!, {
    apiVersion: "2023-10-16",
  });
  const authSession: Session | null = sharedMap.get("session");
  const lookupKey = query.get("id");
  if (!lookupKey) {
    throw redirect(301, "/dashboard/subscriptions");
  }
  if (!authSession || new Date(authSession.expires) < new Date()) {
    throw redirect(302, `/sign-in?callbackUrl=${url.pathname}?id=${lookupKey}`);
  }

  const email = authSession?.user?.email;
  const price = await stripe.prices.retrieve(`${lookupKey}`);

  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email as string));

  let customer;

  if (!user[0].stripe_id?.includes("cus")) {
    customer = await stripe.customers.create({
      email: email as string | undefined,
    });
    await db
      .update(users)
      .set({ stripe_id: customer.id })
      .where(eq(users.email, email as string));
  } else {
    customer = { id: user[0].stripe_id };
  }
  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "auto",
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${env.get(
      "BASE_URL",
    )!}payment/success/?sessionid={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.get("BASE_URL")!}payment/unsuccesfull`,
    customer: customer.id,
  });
  throw redirect(303, session.url as string);
};

export default component$(() => {
  return (
    <>
      <div>
        <span>Payment handling!</span>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Course God, Payment handling",
  meta: [
    {
      name: "description",
      content: "Payment handling",
    },
  ],
};
