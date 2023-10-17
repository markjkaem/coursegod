import { component$ } from "@builder.io/qwik";
import { useAuthSession } from "~/routes/plugin@auth";
export default component$(() => {
  const session = useAuthSession();
  return (
    <>
      <div>
        <span class="text-3xl">Hi, {session.value?.user?.name}</span>
      </div>
    </>
  );
});
