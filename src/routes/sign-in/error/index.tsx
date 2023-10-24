import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";

export const useErrorLoader = routeLoader$(async ({ query }) => {
  if (query.get("error") === "CallbackRouteError") {
    return {
      errorMessage:
        "There was an error signing in, you can't use different login providers.",
    };
  } else if (query.get("error") === "%24l") {
    return {
      errorMessage:
        "There was an error signing in, you can't use different login providers.",
    };
  } else {
    return {
      errorMessage:
        "There was an error signing in, you can't use different login providers.",
    };
  }
});

export default component$(() => {
  const error = useErrorLoader();
  return (
    <>
      <div class="flex w-screen items-center justify-center">
        {error.value.errorMessage}{" "}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Course God, Oops",
  meta: [
    {
      name: "description",
      content: "Error page",
    },
  ],
};
