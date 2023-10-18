import { component$ } from "@builder.io/qwik";
import { routeAction$, Form, routeLoader$ } from "@builder.io/qwik-city";
import { Session } from "@auth/core/types";
import { reviews, users } from "../../../../drizzle/schema";
import db from "../../../../drizzle/db";
import { eq } from "drizzle-orm";
import { RequestHandler } from "@builder.io/qwik-city";
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

export const useAddUser = routeAction$(
  async (data, { sharedMap, url, redirect }) => {
    const authSession: Session | null = sharedMap.get("session");
    if (!authSession || new Date(authSession.expires) < new Date()) {
      throw redirect(302, `/sign-in?callbackUrl=${url.pathname}`);
    }
    const email = authSession.user?.email;

    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, email as string));

    const userId = user[0].id;

    const isAlreadyInDatabase = await db
      .select()
      .from(reviews)
      .where(eq(reviews.userId, userId));

    if (isAlreadyInDatabase[0]) {
      return {
        success: false,
        review: "Failed to add review (max 1 review)",
      };
    }

    await db.insert(reviews).values({
      userId: userId as string,
      message: data.message.toString(),
      title: "",
      rating: 5,
      image: authSession.user?.image,
      name: authSession.user?.name,
    });

    return {
      success: true,
      review: "Added succesfully: " + data.message.toString(),
    };
  },
);

export const useReview = routeLoader$(async ({ sharedMap, redirect, url }) => {
  const authSession: Session | null = sharedMap.get("session");
  if (!authSession || new Date(authSession.expires) < new Date()) {
    throw redirect(302, `/sign-in?callbackUrl=${url.pathname}`);
  }
  const email = authSession.user?.email;
  const user = await db
    .select()
    .from(users)
    .where(eq(users.email, email as string));

  const userId = user[0].id;

  const review = await db
    .select()
    .from(reviews)
    .where(eq(reviews.userId, userId));

  return {
    review: review[0],
  };
});

export default component$(() => {
  const action = useAddUser();
  const review = useReview();
  return (
    <>
      <div>
        {review.value.review && (
          <div class="block w-80 rounded-lg shadow-lg dark:shadow-black/30">
            <div class="h-28 overflow-hidden rounded-t-lg bg-[#ddf527]"></div>
            <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
              <Image
                layout="constrained"
                width={250}
                height={250}
                src={review.value.review.image}
              />
            </div>
            <div class="p-6">
              <h4 class="mb-4 text-2xl font-semibold">
                {review.value.review.name}
              </h4>
              <hr />
              <p class="mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="inline-block h-7 w-7 pr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
                {review.value.review.message}
              </p>
            </div>
          </div>
        )}
      </div>
      {!review.value.review && (
        <Form class="mt-10 flex w-80 flex-col gap-2" action={action}>
          <label class="font-bold">Send review (max 100 char.):</label>
          <input
            class="block w-full rounded-lg border border-white bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            type="text"
            name="message"
            required
            maxLength={100}
          />
          <button class="bg-[#ddf527] px-4 py-2 text-black" type="submit">
            Send review
          </button>
        </Form>
      )}
      {action.value?.success ? (
        <p class="mt-2">{action?.value?.review}</p>
      ) : (
        <p class="mt-2">{action?.value?.review}</p>
      )}
    </>
  );
});
