import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
export default component$(() => {
  return (
    <>
      <div class="grid grid-cols-1 justify-center gap-10 p-4 md:grid-cols-3 ">
        <div class="max-w-sm rounded-lg border border-gray-200  p-6 shadow">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Course 1
            </h5>
          </a>
          <p class="mb-3 font-normal">Course 1</p>
          <Link href="/dashboard/forum">
            <button class="flex items-center px-4 py-2 text-black">
              Go to course 1
            </button>
          </Link>
        </div>
        <div class="max-w-sm rounded-lg border border-gray-200  p-6 shadow">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Course 2
            </h5>
          </a>
          <p class="mb-3 font-normal">Course 2</p>
          <Link href="/dashboard/forum">
            <button class="flex items-center px-4 py-2 text-black">
              Go to course 2
            </button>
          </Link>
        </div>
        <div class="max-w-sm rounded-lg border border-gray-200  p-6 shadow">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Course 3
            </h5>
          </a>
          <p class="mb-3 font-normal">Course 3</p>
          <Link href="/dashboard/forum">
            <button class="flex items-center px-4 py-2 text-black">
              Go to course 3
            </button>
          </Link>
        </div>
        <div class="max-w-sm rounded-lg border border-gray-200  p-6 shadow">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Course 4
            </h5>
          </a>
          <p class="mb-3 font-normal">Course 4</p>
          <Link href="/dashboard/forum">
            <button class="flex items-center px-4 py-2 text-black">
              Go to course 4
            </button>
          </Link>
        </div>
        <div class="max-w-sm rounded-lg border border-gray-200  p-6 shadow">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Course 5
            </h5>
          </a>
          <p class="mb-3 font-normal">Course 5</p>
          <Link href="/dashboard/forum">
            <button class="flex items-center px-4 py-2 text-black">
              Go to course 5
            </button>
          </Link>
        </div>
        <div class="max-w-sm rounded-lg border border-gray-200  p-6 shadow">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Course 6
            </h5>
          </a>
          <p class="mb-3 font-normal">Course 6</p>
          <Link href="/dashboard/forum">
            <button class="flex items-center px-4 py-2 text-black">
              Go to course 6
            </button>
          </Link>
        </div>
      </div>
    </>
  );
});
