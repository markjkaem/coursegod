import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <section id="faq" class="mt-20">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <h2 class="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <div class="grid border-t border-gray-200 pt-8 text-left dark:border-gray-700 md:grid-cols-2 md:gap-16">
            <div>
              <div class="mb-10">
                <h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="mr-2 h-5 w-5 flex-shrink-0 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  1. What are the available subscription options on your
                  platform?
                </h3>
                <p class="">
                  We offer four subscription options: Unsubscribed, Normal,
                  Premium, and Legend.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="mr-2 h-5 w-5 flex-shrink-0 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  2. What does the Normal subscription include?
                </h3>
                <p>
                  The Normal subscription, priced at $29 per month, provides
                  access to all our courses and our forum. You'll enjoy
                  exclusive status icons and 1-on-1 support from our Legends.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="mr-2 h-5 w-5 flex-shrink-0 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What is the cost of the Premium subscription, and what does it
                  offer?
                </h3>
                <p>
                  The Premium subscription is available for $39 per month and
                  grants you access to all our courses, exclusive premium status
                  icons, and 1-on-1 support from our Legends.
                </p>
                <p>
                  Feel free to{" "}
                  <a
                    href="#"
                    class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contact us
                  </a>{" "}
                  and we'll help you out as soon as we can.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="mr-2 h-5 w-5 flex-shrink-0 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What benefits does the Legend subscription offer, and how much
                  does it cost?
                </h3>
                <p>
                  The Legend subscription, priced at $149 per month, provides
                  access to all our courses, exclusive Legend status icons, and
                  1-on-1 support from our Legends.
                </p>
                <p>
                  Find out more information by{" "}
                  <Link
                    target="_blank"
                    href="/terms"
                    class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                  >
                    reading the terms
                  </Link>{" "}
                  <Link
                    target="_blank"
                    href="/privacy-policy"
                    class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div>
              <div class="mb-10">
                <h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="mr-2 h-5 w-5 flex-shrink-0 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Can I switch between subscription levels?
                </h3>
                <p>
                  Yes, you can upgrade or downgrade your subscription at any
                  time to meet your changing needs.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="mr-2 h-5 w-5 flex-shrink-0 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  What happens if I cancel my subscription?
                </h3>
                <p>
                  If you cancel your subscription, you will lose access to our
                  courses and forum. However, you can resubscribe at any time.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="mr-2 h-5 w-5 flex-shrink-0 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Are the courses downloadable, and do you add new ones
                  regularly?
                </h3>
                <p>
                  Yes, all our courses are downloadable, and we continually add
                  new ones every month, providing fresh content for our
                  subscribers.
                </p>
              </div>
              <div class="mb-10">
                <h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    class="mr-2 h-5 w-5 flex-shrink-0 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Is there a setup fee or any hidden charges associated with the
                  subscriptions?
                </h3>
                <p>
                  No, there are no setup fees or hidden charges associated with
                  any of our subscription levels. The price you see is the price
                  you pay per month for the selected subscription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
