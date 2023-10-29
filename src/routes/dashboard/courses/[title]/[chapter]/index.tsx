import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { courses } from "~/ultils/courses";
import { Session } from "@auth/core/types";
import { RequestHandler } from "@builder.io/qwik-city";
import { currentSubscription } from "~/ultils/subscriptions";

export const onRequest: RequestHandler = async ({
  sharedMap,
  redirect,
  url,
  env,
}) => {
  const authSession: Session | null = sharedMap.get("session");
  if (!authSession || new Date(authSession.expires) < new Date()) {
    throw redirect(302, `/sign-in?callbackUrl=${url.pathname}`);
  }
  const email = authSession.user?.email;
  const response = await currentSubscription(email as string, env);
  const hasPageAcces = response.courses;
  if (!hasPageAcces) {
    throw redirect(303, "/dashboard/subscriptions");
  }
};

export const useLink = routeLoader$(async ({ params }) => {
  const correctCourse = courses.filter(
    (course) => course.title === params.title,
  );

  const course = correctCourse[0].chapters?.filter(
    (chapter) => chapter.id === Number(params.chapter),
  );

  const chapter = course[0];

  return {
    title: chapter.title,
    source: chapter.source,
  };
});

export default component$(() => {
  const chapter = useLink();
  return (
    <div>
      {" "}
      <div>
        <h1 class="text-lg font-bold text-white md:text-2xl">
          {chapter.value.title}
        </h1>
        <iframe
          class="mt-8 h-40 w-80 md:h-96 md:w-4/6"
          width="640"
          height="360"
          src={`https://www.dailymotion.com/embed/video/${chapter.value.source}`}
        ></iframe>
      </div>
    </div>
  );
});
