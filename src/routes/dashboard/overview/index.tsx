import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useAuthSession } from "~/routes/plugin@auth";
import { Image } from "@unpic/qwik";

export default component$(() => {
  const session = useAuthSession();

  return (
    <>
      <div>
        <span class="text-3xl text-white">Hi, {session.value?.user?.name}</span>
        <div class="mt-10 grid w-4/6 grid-cols-1 gap-4 md:grid-cols-2">
          <Link href={`/dashboard/subscriptions`}>
            <div class="group relative w-80 rounded-lg border border-gray-600 bg-slate-900 p-2  shadow hover:bg-slate-800">
              <div
                class={`absolute left-0 top-0 z-20 h-[1px] bg-transparent group-hover:w-[2rem] group-hover:animate-moveline group-hover:bg-white`}
              ></div>
              <div class="relative">
                <Image
                  layout="constrained"
                  width={200}
                  height={200}
                  class="h-44 w-80 rounded-t-md"
                  src="/banneryellow.jpg"
                  alt="MW"
                />
                <span class="absolute left-20 top-16 text-4xl">👑⚜️🛡️</span>
              </div>
              <h2 class="mb-2 text-xl font-bold tracking-tight text-white ">
                Manage subscriptions
              </h2>

              <p class="mb-3 font-normal text-white">
                Check out all the subscriptions.
              </p>

              <button class="flex items-center px-4 py-2 text-black">
                Enter
              </button>
            </div>
          </Link>
          <Link href={`/dashboard/courses`}>
            <div class=" group relative w-80 rounded-lg border border-gray-600 bg-slate-900 p-2  shadow hover:bg-slate-800">
              <div
                class={`absolute left-0 top-0 z-20 h-[1px] bg-transparent group-hover:w-[2rem] group-hover:animate-moveline group-hover:bg-white`}
              ></div>
              <Image
                layout="constrained"
                width={200}
                height={200}
                class="h-44 w-80 rounded-t-md"
                src="/banner.webp"
                alt="MW"
              />
              <h2 class="mb-2 text-xl font-bold tracking-tight text-white ">
                My courses
              </h2>

              <p class="mb-3 font-normal text-white">
                Check out all the courses that we offer.
              </p>

              <button class="flex items-center px-4 py-2 text-black">
                Enter
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
});
