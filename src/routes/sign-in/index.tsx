import { component$ } from "@builder.io/qwik";
import { useAuthSignin } from "../plugin@auth";
import { Form } from "@builder.io/qwik-city";

export default component$(() => {
  const signIn = useAuthSignin();
  return (
    <>
      <section class="">
        <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div class="w-full rounded-lg shadow dark:border dark:border-gray-500  sm:max-w-md md:mt-0 xl:p-0">
            <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
              <div class="flex flex-col">
                <span class="text-xl font-bold leading-tight tracking-tight text-gray-900 text-white md:text-2xl">
                  Sign in to your account
                </span>
                <span class="text-white">
                  At the moment we support two providers.
                </span>
              </div>
              <div>
                <Form action={signIn}>
                  <input type="hidden" name="providerId" value="google" />
                  <input
                    type="hidden"
                    name="options.callbackUrl"
                    value="/dashboard/overview"
                  />
                  <button class="dark:focus:ring-[#4285F4]/55 mb-2 mr-2 inline-flex w-48 items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50">
                    <svg
                      class="mr-2 h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                </Form>
                <Form action={signIn}>
                  <input type="hidden" name="providerId" value="discord" />
                  <input
                    type="hidden"
                    name="options.callbackUrl"
                    value="/dashboard/overview"
                  />
                  <button class=" dark:focus:ring-[#7289da]/55 mb-2 mr-2 inline-flex w-48 items-center rounded-lg bg-[#7289da] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#7289da]/90 focus:outline-none focus:ring-4 focus:ring-[#7289da]/50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-discord mr-2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                    </svg>
                    Sign in with Discord
                  </button>
                </Form>
                <Form action={signIn}>
                  <input type="hidden" name="providerId" value="twitter" />
                  <input
                    type="hidden"
                    name="options.callbackUrl"
                    value="/dashboard/overview"
                  />
                  <button class="dark:focus:ring-[#7289da]/55 mb-2 mr-2 inline-flex w-48 items-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-black">
                    <svg
                      class="mr-2"
                      width="16"
                      height="16"
                      viewBox="0 0 1200 1227"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                        fill="white"
                      />
                    </svg>
                    Sign in with Twitter
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
