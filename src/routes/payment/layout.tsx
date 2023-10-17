import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Session } from "@auth/core/types";

export default component$(() => {
  return (
    <div class="flex min-h-screen w-screen ">
      <Slot />
    </div>
  );
});

export const onRequest: RequestHandler = (event) => {
  const id = event.params.id;
  const pathname = event.url.pathname;
  console.log(pathname);
  const session: Session | null = event.sharedMap.get("session");
  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(
      302,
      `/sign-in?callbackUrl=${event.url.pathname}?id=${id}`,
    );
  }
};
