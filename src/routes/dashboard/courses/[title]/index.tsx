import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { courses } from "~/ultils/courses";
import { Session } from "@auth/core/types";
import { RequestHandler } from "@builder.io/qwik-city";
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

export const useLink = routeLoader$(async ({ params }) => {
  const correctCourse = courses.filter(
    (course) => course.title === params.title,
  );
  const course = correctCourse[0];

  return {
    link: course.link,
    title: course.title,
    banner: course.banner,
    description: course.description,
    chapters: course.chapters,
  };
});

export default component$(() => {
  const course = useLink();

  return (
    <div>
      {" "}
      <h1 class="text-3xl text-white">{course.value.title}</h1>
      <div class="mt-10 flex flex-col">
        {course.value.chapters?.map((chapter) => {
          return (
            <Link
              key={chapter.id}
              class="w-80 bg-slate-800 px-4 py-2 hover:bg-slate-700 md:w-3/6"
              href={`/dashboard/courses/${course.value.title}/${chapter.id}`}
            >
              {chapter.title}
            </Link>
          );
        })}
        <a class="mt-6" target="_blank" href={`${course.value.link}`}>
          <button class="flex items-center px-4 py-2 text-black">
            Download documents
          </button>
        </a>
      </div>
    </div>
  );
});
