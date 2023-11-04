import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link, routeLoader$ } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import db from "../../../drizzle/db";
import { blogs } from "../../../drizzle/schema";
import dayjs from "dayjs";

export const useBlogs = routeLoader$(async () => {
  const allBlogs = await db.select().from(blogs);

  return {
    blogs: allBlogs,
  };
});

// Now we can export a function that returns a DocumentHead object
export const head: DocumentHead = ({ resolveValue }) => {
  const headBlog = resolveValue(useBlogs);
  return {
    title: `Course God, ${headBlog.blogs[0].title}`,
    meta: [
      {
        name: "description",
        content: headBlog.blogs[0].title as string,
      },
    ],
  };
};

export default component$(() => {
  const blogs = useBlogs();
  return (
    <div class="grid min-h-screen grid-cols-1 gap-2 text-white lg:flex">
      <div class="w-full justify-center p-2 lg:w-4/6 lg:p-4">
        <div>
          <article class="m-auto w-full lg:w-8/12">
            <header>
              <div class="flex justify-between">
                <div class="flex items-center">
                  <Image
                    loading="eager"
                    height={600}
                    width={600}
                    src="/mark.jpeg"
                    alt="mark"
                    class="h-10 w-10 rounded-full object-cover lg:h-14 lg:w-14 "
                  />

                  <div class="flex flex-col">
                    <p class="ml-2 text-sm font-medium lg:text-base">
                      {blogs?.value.blogs[0]?.author}
                    </p>
                    <p class="ml-2 text-sm font-normal text-white lg:text-base">
                      {" "}
                      {dayjs(blogs?.value.blogs[0]?.date).format("YYYY-MM-DD")}
                    </p>
                  </div>
                </div>
                <div class="mt-2 flex space-x-2">
                  <Link
                    href="https://www.facebook.com/rubyfinance"
                    class="text-white  "
                  >
                    {/* <BsFacebook class="h-4 w-4 lg:h-6 lg:w-6" /> */}
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/rubyfinance/"
                    class="text-white  "
                  >
                    {/* <BsLinkedin class="h-4 w-4 lg:h-6 lg:w-6" /> */}
                  </Link>
                  <Link
                    href="https://www.instagram.com/rubyfinance/"
                    class="text-white  "
                  >
                    {/* <BsInstagram class="h-4 w-4 lg:h-6 lg:w-6" /> */}
                  </Link>
                </div>
              </div>
              <div class="mt-4 flex items-center text-white">
                <h1 class="text-2xl font-bold text-white lg:text-4xl">
                  {blogs.value.blogs[0]?.title}
                </h1>
              </div>
            </header>
            <main>
              <div class="mt-4 flex h-52 max-w-4xl">
                <Image
                  loading="eager"
                  height={600}
                  width={600}
                  src={`/${blogs.value.blogs[0]?.image}`}
                  alt="blog_banner"
                  class="mt-4 w-full object-cover "
                />
              </div>

              <p class="m-auto mt-10 flex w-full flex-col justify-center text-2xl font-bold text-white ">
                {blogs.value.blogs[0]?.intro}
              </p>
              <p class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-white ">
                {blogs.value.blogs[0]?.text1}
              </p>
              <p class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-white ">
                {blogs.value.blogs[0]?.text2}
              </p>
              <h2 class="m-auto mt-8 flex w-full flex-col justify-center  text-3xl font-bold text-white ">
                {blogs.value.blogs[0]?.header1}
              </h2>
              <p class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-white ">
                {blogs.value.blogs[0]?.text3}
              </p>
              <p class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-white ">
                {blogs.value.blogs[0]?.text4}
              </p>
              <h2 class="m-auto mt-8 flex w-full flex-col justify-center text-3xl font-bold text-white ">
                {blogs.value.blogs[0]?.header2}
              </h2>
              <p class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-white ">
                {blogs.value.blogs[0]?.text5}
              </p>
              <p class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-white ">
                {blogs.value.blogs[0]?.text6}
              </p>
              <p class="m-auto mt-2 flex w-full flex-col justify-center text-xl text-white ">
                {blogs.value.blogs[0]?.text7}
              </p>
              <div class="mt-8 hidden w-80 md:flex">
                {" "}
                <Link href="/#pricing">
                  <div class="flex p-6 lg:p-0">
                    <button class="mt-4 w-full rounded-full border bg-[#ddf527]  p-2 text-black transition">
                      Get acces to courses now
                    </button>
                  </div>
                </Link>
              </div>
            </main>
          </article>
        </div>
      </div>
      <div class="w-full p-6 lg:w-2/12 lg:p-0">
        <Link href="/#pricing">
          <div class="flex p-6 lg:p-0">
            <button class="mt-4 w-full rounded-full border bg-[#ddf527]  p-2 text-black transition">
              Get acces to courses now
            </button>
          </div>
        </Link>

        <div class="-ml-0 hidden lg:-ml-40 lg:grid">
          <div class="flex-col items-center">
            <Image
              loading="eager"
              height={600}
              width={600}
              src="/mark.jpeg"
              alt="mark"
              class="mt-6 h-20 w-20 rounded-full object-cover "
            />

            <div class="mt-4">
              <p class=" font-semibold">{blogs.value.blogs[0].author}</p>
            </div>
          </div>
          <span class="mb-4 mt-6 text-lg font-semibold">More blogs</span>
        </div>

        {blogs.value.blogs?.map((blog, i: number) => {
          return (
            <div key={i} class="-ml-0 mt-6 lg:-ml-40">
              <Link href={`/blogs/${blog.title}`}>
                <div class="flex">
                  <div class="w-4/6">
                    <div class="flex">
                      <Image
                        loading="eager"
                        height={600}
                        width={600}
                        src="/mark.jpeg"
                        alt="mark"
                        class="h-6 w-6 rounded-full object-cover "
                      />

                      <p class=" ml-2 font-semibold text-white">
                        {blog.author}
                      </p>
                    </div>
                    <div class="">
                      <span class="text-md mt-2 font-extrabold text-white">
                        {blog.title}
                      </span>
                    </div>
                  </div>

                  <div class="w-2/6">
                    <Image
                      loading="eager"
                      height={600}
                      width={600}
                      src={`/${blog.image}`}
                      alt="blog_banner_nieuw"
                      class="ml-6 h-14 w-14 rounded-md object-cover "
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
});
