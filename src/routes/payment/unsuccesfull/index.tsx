import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="flex w-screen justify-center">
        <span>
          Order was cancelled,{" "}
          <Link href="/dashboard/subscriptions">go back</Link>
        </span>
      </div>
    </>
  );
});
