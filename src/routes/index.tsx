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

export const useReviews = routeLoader$(async ({ cacheControl }) => {
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
  const Allreviews = await db.select().from(reviews);

  return {
    reviews: Allreviews,
  };
});

export default component$(() => {
  const reviews = useReviews();
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
      <Hero />
      <Banner />

      <div class="container-center container-spacing-xl container">
        <Services />
      </div>
      <Pricing />
      <Companies />
      <div class="container-center container-spacing-xl container">
        <Review reviews={reviews.value.reviews} />
      </div>
      <Faq />
    </>
  );
});

export const head: DocumentHead = {
  title: "The Money Whale, get the latest money making courses.",
  meta: [
    {
      name: "description",
      content: "Make money like a whale, start watching courses today.",
    },
  ],
};
