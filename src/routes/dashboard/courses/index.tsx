import { Session } from "@auth/core/types";
import { component$ } from "@builder.io/qwik";
import { Link, RequestHandler } from "@builder.io/qwik-city";
import { courses } from "~/ultils/courses";
import { currentSubscription } from "~/ultils/subscriptions";

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
  return (
    <>
      <div class="grid grid-cols-1 justify-center gap-10 p-4 md:grid-cols-3 ">
        {courses.map((course) => {
          return (
            <div
              key={course.id}
              class="max-w-sm rounded-lg border border-gray-200 bg-slate-900  p-6 shadow"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {course.title}
              </h5>

              <p class="mb-3 font-normal">{course.title}</p>
              <Link href={`/dashboard/courses/${course.title}`}>
                <button class="flex items-center px-4 py-2 text-black">
                  Download
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
});
