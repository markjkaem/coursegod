import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Session } from "@auth/core/types";
import Sidebar from "~/components/starter/sidebar/sidebar";

export default component$(() => {
  return (
    <div class="flex min-h-screen w-screen ">
      <div class="w-3/12">
        {" "}
        <Sidebar />
      </div>
      <div class="w-9/12 p-6">
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
