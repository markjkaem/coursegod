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
                <span class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                  Sign up to your account
                </span>
                <span>At the moment we support one provider.</span>
              </div>
              <div>
                <Form action={signIn}>
                  <input type="hidden" name="providerId" value="google" />
                  <input
                    type="hidden"
                    name="options.callbackUrl"
                    value="http://qwik-auth-example.com/dashboard"
                  />
                  <button class="dark:focus:ring-[#4285F4]/55 mb-2 mr-2 inline-flex items-center rounded-lg bg-[#4285F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#4285F4]/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
