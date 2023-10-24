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
  console.log(params);
  const course = correctCourse[0].chapters?.filter(
    (chapter) => chapter.id === Number(params.chapter),
  )!;
  console.log(course);
  const chapter = course[0];

  return {
    title: chapter.title,
    source: chapter.source,
  };
});

export default component$(() => {
  const chapter = useLink();
  console.log(chapter.value.source);
  return (
    <div>
      {" "}
      <div>
        <h1 class="text-2xl font-bold text-white">{chapter.value.title}</h1>
        <iframe
          width="640"
          height="360"
          src={`https://www.dailymotion.com/embed/video/${chapter.value.source}`}
        ></iframe>
      </div>
    </div>
  );
});
