import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Session } from "@auth/core/types";
import Sidebar from "~/components/starter/sidebar/sidebar";
import { routeLoader$ } from "@builder.io/qwik-city";
import { currentSubscription } from "~/ultils/subscriptions";

export const useSubscriptionStatus = routeLoader$(
  async ({ sharedMap, url, redirect }) => {
    const authSession: Session | null = sharedMap.get("session");
    if (!authSession || new Date(authSession.expires) < new Date()) {
      throw redirect(302, `/sign-in?callbackUrl=${url.pathname}`);
    }
    const email = authSession.user?.email;
    const response = await currentSubscription(email as string);
    return response;
  },
);

export default component$(() => {
  const subscriptionStatus = useSubscriptionStatus();
  const hasAccesToCourses = subscriptionStatus.value.courses ?? false;
  return (
    <div class="flex min-h-screen w-screen ">
      <div class="md:w-3/12">
        {" "}
        <Sidebar hasAccesToCourses={hasAccesToCourses as any} />
      </div>
      <div class="pl-1 md:w-9/12 md:pl-0">
        <Slot />
      </div>
    </div>
  );
});

export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/sign-in?callbackUrl=${event.url.pathname}`);
  }
};
