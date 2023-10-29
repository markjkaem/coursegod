// import { Session } from "@auth/core/types";
import { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { DocumentHead, RequestHandler } from "@builder.io/qwik-city";
import Stripe from "stripe";

export const onRequest: RequestHandler = async ({
  redirect,
  query,
  sharedMap,
  url,
  env,
}) => {
  const stripe = new Stripe(env.get("STRIPE_TEST_KEY")!, {
    apiVersion: "2023-10-16",
  });
  const authSession: Session | null = sharedMap.get("session");
  if (!authSession || new Date(authSession.expires) < new Date()) {
    throw redirect(302, `/sign-in?callbackUrl=${url.pathname}`);
  }
  const sessionId = query.get("sessionid");
  if (!sessionId) {
    redirect(301, "/subscriptions");
  }
  const checkoutSession = await stripe.checkout.sessions.retrieve(
    sessionId?.toString() as string,
  );

  const portalSession = await stripe.billingPortal.sessions.create({
    customer: checkoutSession.customer as string,
    return_url: `${env.get("BASE_URL")!}dashboard/subscriptions`,
  });
  throw redirect(301, portalSession.url);
};

export default component$(() => {
  return (
    <>
      <div>
        <span>Order success</span>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Course God, Succes",
  meta: [
    {
      name: "description",
      content: "Order was succesfull",
    },
  ],
};
