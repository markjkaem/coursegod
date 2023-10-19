import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();
  setTimeout(() => {
    loc.url.pathname.replace(`${loc.params}`, "/dashboard/subscriptions");
  }, 2000);
  return (
    <>
      <div class="flex w-screen justify-center">
        <span>Order was cancelled, you will be redirected</span>
      </div>
    </>
  );
});
