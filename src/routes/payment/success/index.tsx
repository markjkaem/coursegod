// import { Session } from "@auth/core/types";
import { Session } from "@auth/core/types";
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
  redirect,
  query,
  sharedMap,
  url,
  env,
}) => {
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
