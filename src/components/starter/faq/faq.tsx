import { component$ } from "@builder.io/qwik";
import { JSX } from "@builder.io/qwik/jsx-runtime";

export default component$(() => {
  return (
    <div>
      <section class="mt-20">
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
                  What do you mean by "Figma assets"?
                </h3>
                <p class="">
                  You will have access to download the full Figma project
                  including all of the pages, the components, responsive pages,
                  and also the icons, illustrations, and images included in the
                  screens.
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
                  What does "lifetime access" exactly mean?
                </h3>
                <p>
                  Once you have purchased either the design, code, or both
                  packages, you will have access to all of the future updates
                  based on the roadmap, free of charge.
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
                  How does support work?
                </h3>
                <p>
                  We're aware of the importance of well qualified support, that
                  is why we decided that support will only be provided by the
                  authors that actually worked on this project.
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
                  I want to build more than one project. Is that allowed?
                </h3>
                <p>
                  You can use Windster for an unlimited amount of projects,
                  whether it's a personal website, a SaaS app, or a website for
                  a client. As long as you don't build a product that will
                  directly compete with Windster either as a UI kit, theme, or
                  template, it's fine.
                </p>
                <p>
                  Find out more information by{" "}
                  <a
                    href="#"
                    class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                  >
                    reading the license
                  </a>
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
                  What does "free updates" include?
                </h3>
                <p>
                  The free updates that will be provided is based on the{" "}
                  <a
                    href="#"
                    class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                  >
                    roadmap
                  </a>{" "}
                  that we have laid out for this project. It is also possible
                  that we will provide extra updates outside of the roadmap as
                  well.
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
                  What does the free version include?
                </h3>
                <p>
                  The{" "}
                  <a
                    href="#"
                    class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                  >
                    free version
                  </a>{" "}
                  of Windster includes a minimal style guidelines, component
                  variants, and a dashboard page with the mobile version
                  alongside it.
                </p>
                <p>
                  You can use this version for any purposes, because it is
                  open-source under the MIT license.
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
                  What is the difference between Windster and Tailwind UI?
                </h3>
                <p>
                  Although both Windster and Tailwind UI are built for
                  integration with Tailwind CSS, the main difference is in the
                  design, the pages, the extra components and UI elements that
                  Windster includes.
                </p>
                <p>
                  Additionally, Windster is a project that is still in
                  development, and later it will include both the application,
                  marketing, and e-commerce UI interfaces.
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
                  Can I use Windster in open-source projects?
                </h3>
                <p>
                  Generally, it is accepted to use Windster in open-source
                  projects, as long as it is not a UI library, a theme, a
                  template, a page-builder that would be considered as an
                  alternative to Windster itself.
                </p>
                <p>
                  With that being said, feel free to use this design kit for
                  your open-source projects.
                </p>
                <p>
                  Find out more information by{" "}
                  <a
                    href="#"
                    class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline"
                  >
                    reading the license
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

const ServiceCard = ({
  icon,
  title,
  details,
}: {
  icon: JSX.Element;
  title: string;
  details: string;
}) => {
  return (
    <>
      <div class="w-full px-4 md:w-1/2 lg:w-1/3">
        <div class="mb-8 rounded-[20px] p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
          <div
            class={`bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl p-3`}
          >
            {icon}
          </div>
          <h4 class="text-dark mb-3 text-xl font-semibold">{title}</h4>
          <p class="text-body-color">{details}</p>
        </div>
      </div>
    </>
  );
};
