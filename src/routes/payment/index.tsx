import { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_TEST_KEY!, {
  apiVersion: "2023-10-16",
});
export const onRequest: RequestHandler = async ({
  sharedMap,
  headers,
  query,
}) => {
  headers.set("Cache-Control", "private");
  const session: Session | null = sharedMap.get("session");
  const lookupKey = query.get("id");
  console.log(lookupKey);
  const email = session?.user?.email;

  const price = await stripe.prices.retrieve(`${lookupKey}`);
  console.log(price);
};

export default component$(() => {
  return (
    <>
      <div>
        <span>Payment handling</span>
      </div>
    </>
  );
});
