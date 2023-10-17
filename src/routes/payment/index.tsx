// import { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51L34nrJ0Tu9paWkW9sF0gCPGB55l3fncgRlFJmF2Lcr4xEUdCMuUtQnYang1GsxdZAmw9AaTC6vHgJHPhNMAsDDA000WqYNd73",
  {
    apiVersion: "2023-10-16",
  },
);
export const onRequest: RequestHandler = async ({
  //   sharedMap,
  headers,
  query,
}) => {
  headers.set("Cache-Control", "private");
  //   const session: Session | null = sharedMap.get("session");
  const lookupKey = query.get("id");
  console.log(lookupKey);
  //   const email = session?.user?.email;

  const price = await stripe.prices.retrieve(`${lookupKey}`);
  console.log(price);
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
