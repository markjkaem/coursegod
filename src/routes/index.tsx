import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

import Services from "~/components/starter/services/services";
import Hero from "~/components/starter/hero/hero";
import Pricing from "~/components/starter/pricing/pricing";
import Banner from "~/components/starter/banner/banner";
import Faq from "~/components/starter/faq/faq";
import Companies from "~/components/starter/companies/companies";
import Review from "~/components/starter/review";
import { reviews } from "../../drizzle/schema";
import db from "../../drizzle/db";

export const useReviews = routeLoader$(async () => {
  const Allreviews = await db.select().from(reviews);

  return {
    reviews: Allreviews,
  };
});

export const useSubscriptions = routeLoader$(({env}) => {
  return {
    subscription1: env.get("SUBSCRIPTION1"),
    subscription2: env.get("SUBSCRIPTION2"),
    subscription3: env.get("SUBSCRIPTION3") 
  };
});

export default component$(() => {
  const reviews = useReviews();
  const subscriptions = useSubscriptions()
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <Hero />
      <Banner />

      <div class="container-center container-spacing-xl container">
        <Services />
      </div>
      <Pricing subscriptions={subscriptions.value} />
      <Companies />
      <div class="container-center container-spacing-xl container">
        <Review reviews={reviews.value.reviews} />
      </div>
      <Faq />
    </>
  );
});

export const head: DocumentHead = {
  title: "Course God, get the latest money making courses.",
  meta: [
    {
      name: "description",
      content: "Make money like a whale, start watching courses today.",
    },
  ],
};
