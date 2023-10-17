import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Pricing from "~/components/starter/pricing/pricing";

export default component$(() => {
  return (
    <>
      <div class="grid grid-cols-1 justify-center gap-10 p-4 md:grid-cols-3 ">
        <div class="max-w-sm rounded-lg border border-gray-200  p-6 shadow">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Current subscription
            </h5>
          </a>
          <p class="mb-3 font-normal">Unsubscribed</p>
        </div>
        <div class="max-w-sm rounded-lg border border-gray-200  p-6 shadow">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upgrade
            </h5>
          </a>
          <p class="mb-3 font-normal">Upgrade your subscription</p>
          <Link href="/dashboard/subscriptions#pricing">
            <button class="flex items-center px-4 py-2 text-black">
              Upgrade subscription
            </button>
          </Link>
        </div>
        <div class="max-w-sm rounded-lg border border-gray-200  p-6 shadow">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Cancel
            </h5>
          </a>
          <p class="mb-3 font-normal">Cancel your subscription</p>
          <Link href="/dashboard/forum">
            <button class="flex items-center px-4 py-2 text-black">
              Cancel subscription
            </button>
          </Link>
        </div>
      </div>
      <div id="pricing" class="mt-10">
        <Pricing />
      </div>
    </>
  );
});
