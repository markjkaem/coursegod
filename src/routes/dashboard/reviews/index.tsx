import { component$ } from "@builder.io/qwik";
import { routeAction$, Form } from "@builder.io/qwik-city";
import { Session } from "@auth/core/types";
import { reviews, users } from "../../../../drizzle/schema";
import db from "../../../../drizzle/db";
import { eq } from "drizzle-orm";

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
      review: "Added succesfully",
    };
  },
);
export default component$(() => {
  const action = useAddUser();
  return (
    <>
      <Form class="flex w-80 flex-col gap-2" action={action}>
        <input class="text-black" type="text" name="message" required />
        <button type="submit">Add review</button>
      </Form>
      {action.value?.success ? (
        <p>{action?.value?.review}</p>
      ) : (
        <p>{action?.value?.review}</p>
      )}
    </>
  );
});
