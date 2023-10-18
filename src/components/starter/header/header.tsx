import { component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { useAuthSession } from "~/routes/plugin@auth";
import { Image } from "@unpic/qwik";

export default component$(() => {
  const session = useAuthSession();
  const store = useStore({
    scrolled: false,
  });

  return (
    <header class="h-20">
      <div
        class={
          store.scrolled
            ? "fixed flex w-screen items-center justify-between bg-slate-900 px-10 py-4 md:px-20"
            : "fixed flex  w-screen items-center justify-between bg-transparent px-4 py-4 md:px-8"
        }
        document:onScroll$={() => {
          if (window.scrollY > 0) {
            store.scrolled = true;
          } else {
            store.scrolled = false;
          }
        }}
      >
        <div>
          <Link href="/">
            {" "}
            <Image
              layout="constrained"
              width={200}
              height={200}
              class="h-10 w-10"
              src="/MWlogo.png"
              alt="MW"
            />
          </Link>
        </div>
        <div>
          {" "}
          <ul class="flex items-center">
            {!session.value?.user?.name ? (
              <>
                <li>
                  <Link class="text-xl" href="/sign-in">
                    <button class="px-4 py-1 text-black"> Sign-in</button>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/dashboard/overview"
                    class="text-md mr-4 text-white underline"
                  >
                    My Dashboard
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/dashboard/settings">
                    {" "}
                    <Image
                      layout="constrained"
                      width={200}
                      height={200}
                      class="h-8 w-8 cursor-pointer rounded-full transition hover:scale-95"
                      aria-label="My account"
                      src={`${session.value.user.image as string}`}
                      alt="avatar"
                    />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
});
