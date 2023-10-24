import { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { Link, RequestHandler } from "@builder.io/qwik-city";
import { currentSubscription } from "~/ultils/subscriptions";
import { Image } from "@unpic/qwik";

export const onRequest: RequestHandler = async ({
  sharedMap,
  redirect,
  url,
}) => {
  const authSession: Session | null = sharedMap.get("session");
  if (!authSession || new Date(authSession.expires) < new Date()) {
    throw redirect(302, `/sign-in?callbackUrl=${url.pathname}`);
  }
  const email = authSession.user?.email;
  const response = await currentSubscription(email as string);
  const hasPageAcces = response.courses;
  if (!hasPageAcces) {
    throw redirect(303, "/dashboard/subscriptions");
  }
};

export default component$(() => {
  const courses = [
    {
      id: 1,
      title: "Fiverr Freelancing Course",
      description: "Learn to freelance on Fiverr",
      banner: "image1.png",
    },
    {
      id: 2,
      title: "SEO Course",
      description: "Learn web Search Engine Optimalization",
      banner: "image1.png",
    },
    {
      id: 3,
      title: "Shopify Drop Shipping Course",
      description: "Learn Shopify dropshipping",
      banner: "image1.png",
    },
    {
      id: 4,
      title: "Youtube Earning Course",
      description: "Learn to master Youtube",
      banner: "image1.png",
    },
  ];
  return (
    <>
      <div class="mr-4 grid grid-cols-1 justify-center gap-4 p-4 lg:grid-cols-2 xl:grid-cols-3 ">
        {courses.map((course, i) => {
          return (
            <Link key={i} href={`/dashboard/courses/${course.title}`}>
              <div
                key={course.id}
                class="  w-80 rounded-lg border border-gray-600 bg-slate-900 p-2  shadow hover:bg-slate-800"
              >
                <Image
                  layout="constrained"
                  width={200}
                  height={200}
                  class="w-80 rounded-t-md"
                  src="/image1.png"
                  alt="MW"
                />
                <h2 class="mb-2 text-xl font-bold tracking-tight text-white ">
                  {course.title}
                </h2>

                <p class="mb-3 font-normal text-white">{course.description}</p>

                <button class="flex items-center px-4 py-2 text-black">
                  Start
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
});
