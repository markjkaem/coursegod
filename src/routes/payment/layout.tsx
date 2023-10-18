import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex min-h-screen w-screen ">
      <Slot />
    </div>
  );
});
