import { component$ } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";
export default component$(() => {
  const session = useAuthSession();
  return (
    <>
      <div>
        <div class="mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Full name
            </label>
            <input
              value={session.value?.user?.name}
              type="text"
              id="first_name"
              class="block w-full rounded-lg border border-white bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="John"
              disabled
            />
          </div>
          <div>
            <label
              for="last_name"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              value={session.value?.user?.email}
              type="text"
              id="last_name"
              class="block w-full rounded-lg border border-white bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Doe"
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
});
