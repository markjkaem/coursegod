import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

interface Review {
  id: number;
  userId: string;
  title: string;
  message: string;
  rating: string;
  image: string;
  name: string;
}

export default component$(({ reviews }: any) => {
  return (
    <section class="p-4 text-neutral-700 dark:text-neutral-300">
      <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 class="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Testimonials
        </h3>
        <p class="mb-6 pb-2 md:mb-12 md:pb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      <div class="grid gap-6 text-center md:grid-cols-3">
        {reviews.value.reviews.map((review: Review) => {
          return (
            <div>
              <div class="block rounded-lg shadow-lg dark:shadow-black/30">
                <div class="h-28 overflow-hidden rounded-t-lg bg-[#ffffff]"></div>
                <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <Image
                    layout="constrained"
                    width={250}
                    height={250}
                    src={review.image}
                  />
                </div>
                <div class="p-6">
                  <h4 class="mb-4 text-2xl font-semibold">{review.name}</h4>
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
                    {review.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});