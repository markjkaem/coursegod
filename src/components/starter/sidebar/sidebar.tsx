import { component$, useSignal } from "@builder.io/qwik";
import { Form, Link } from "@builder.io/qwik-city";
import { useAuthSignout } from "~/routes/plugin@auth";
import { Image } from "@unpic/qwik";

export default component$(({ hasAccesToCourses }: any) => {
  const signOut = useAuthSignout();
  const isOpen = useSignal(false);
  return (
    <>
      <button
        onClick$={() => (isOpen.value = true)}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="ml-3 mt-2 inline-flex items-center rounded-lg  p-2 text-sm  text-gray-400 focus:outline-none  focus:ring-2  focus:ring-gray-600"
      >
        <span class="mr-4 hidden md:flex "></span>
        <svg
          class="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {isOpen.value && (
        <aside
          class="fixed left-0 top-0 z-40 h-screen w-64 transition-transform sm:translate-x-0"
          aria-label="Sidenav"
        >
          <div class="h-full overflow-y-auto border-r  border-slate-700 bg-slate-900 px-3 py-5">
            <ul class="space-y-2">
              <li class="relative">
                <div class="w-10" onClick$={() => (isOpen.value = false)}>
                  <Link href="/" class="">
                    {" "}
                    <Image
                      layout="constrained"
                      width={200}
                      height={200}
                      class="h-8 w-8"
                      src="/cg.png"
                      alt="MW"
                    />
                  </Link>
                </div>
                <span
                  class="absolute right-2 top-2 cursor-pointer hover:text-gray-400"
                  onClick$={() => (isOpen.value = false)}
                >
                  Close
                </span>
              </li>

              <li class="pt-4" onClick$={() => (isOpen.value = false)}>
                <Link
                  href="/dashboard/overview"
                  class="group flex items-center rounded-lg p-2 text-base font-normal  text-white hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6  text-gray-400 transition  duration-75 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>

                  <span class="ml-3">Overview</span>
                </Link>
              </li>
              {hasAccesToCourses ? (
                <li onClick$={() => (isOpen.value = false)}>
                  <Link
                    href="/dashboard/courses"
                    class="group flex items-center rounded-lg p-2 text-base font-normal  text-white hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      class="h-6 w-6 flex-shrink-0  text-gray-400 transition  duration-75 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="ml-3">Courses</span>
                  </Link>
                </li>
              ) : (
                <li>
                  <div class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900   ">
                    <svg
                      aria-hidden="true"
                      class="h-6 w-6 flex-shrink-0 text-gray-600 transition duration-75 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div class="flex gap-2">
                      {" "}
                      <span class="ml-3 text-gray-500">Courses</span>
                      <span class="items-center justify-center rounded bg-yellow-400 px-2 py-1 text-xs font-bold text-black">
                        Member
                      </span>
                    </div>
                  </div>
                </li>
              )}
            </ul>
            <ul class="mt-5 space-y-2 border-t  border-gray-700 pt-5">
              <li onClick$={() => (isOpen.value = false)}>
                <Link
                  href="/dashboard/subscriptions"
                  class="group flex items-center rounded-lg p-2 text-base font-normal  text-white transition  duration-75 hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-shrink-0  text-gray-400 transition  duration-75 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  <span class="ml-3">Subscriptions</span>
                </Link>
              </li>
              {hasAccesToCourses ? (
                <li onClick$={() => (isOpen.value = false)}>
                  <Link
                    href="/dashboard/reviews"
                    class="group flex items-center rounded-lg p-2 text-base font-normal  text-white transition  duration-75 hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      class="h-6 w-6 flex-shrink-0 text-gray-400 transition  duration-75 group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                    </svg>
                    <span class="ml-3">Reviews</span>
                  </Link>
                </li>
              ) : (
                <li>
                  <div class="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900   ">
                    <svg
                      aria-hidden="true"
                      class="h-6 w-6 flex-shrink-0 text-gray-600 transition duration-75 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                    </svg>
                    <div class="flex gap-2">
                      {" "}
                      <span class="ml-3 text-gray-500">Reviews</span>
                      <span class="items-center justify-center rounded bg-yellow-400 px-2 py-1 text-xs font-bold text-black">
                        Member
                      </span>
                    </div>
                  </div>
                </li>
              )}
              <li onClick$={() => (isOpen.value = false)}>
                <Link
                  href="/blogs"
                  target="_blank"
                  class="group flex items-center rounded-lg p-2 text-base font-normal  text-white transition  duration-75 hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-shrink-0  text-gray-400 transition  duration-75 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  <span class="ml-3">Stories</span>
                </Link>
              </li>
              <li onClick$={() => (isOpen.value = false)}>
                <Link
                  href="/#faq"
                  target="_blank"
                  class="group flex items-center rounded-lg p-2 text-base font-normal  text-white transition  duration-75 hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="h-6 w-6 flex-shrink-0  text-gray-400 transition  duration-75 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  <span class="ml-3">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>
          <div class="absolute bottom-20 left-0 z-20 flex w-full items-center space-x-4 border-r  border-gray-700  bg-slate-900 p-4 md:bottom-0 md:bottom-2 lg:flex">
            <Form action={signOut}>
              <input type="hidden" name="callbackUrl" />
              <button class="px-4 py-2 text-black">Sign Out</button>
            </Form>
            <div onClick$={() => (isOpen.value = false)}>
              <Link
                href="/dashboard/settings"
                data-tooltip-target="tooltip-settings"
                class="inline-flex cursor-pointer justify-center rounded p-2 text-gray-400   hover:bg-slate-900 hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div
              id="tooltip-settings"
              role="tooltip"
              class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
            >
              Settings page
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </aside>
      )}
    </>
  );
});
