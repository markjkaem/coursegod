import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Services from "~/components/starter/services/services";
import Hero from "~/components/starter/hero/hero";
import Pricing from "~/components/starter/pricing/pricing";
import Banner from "~/components/starter/banner/banner";
import Faq from "~/components/starter/faq/faq";
import Companies from "~/components/starter/companies/companies";

export default component$(() => {
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
        <Faq />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "The money whale",
  meta: [
    {
      name: "description",
      content: "Make money like a whale, start watching courses today.",
    },
  ],
};
