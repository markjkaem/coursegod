import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";
import { useAuthSession } from "~/routes/plugin@auth";
import { Image } from "@unpic/qwik";

export default component$(() => {
  const session = useAuthSession();

  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
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
        <ul class="flex items-center">
          {!session.value?.user?.name ? (
            <>
              <li>
                <Link class="text-xl" href="/sign-in" target="_blank">
                  Sign-in
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/dashboard/overview" class="text-md">
                  Dashboard
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
    </header>
  );
});
