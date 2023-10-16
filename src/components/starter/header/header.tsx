import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Form, Link } from "@builder.io/qwik-city";
import { useAuthSession, useAuthSignout } from "~/routes/plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  const signOut = useAuthSignout();
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a class="text-3xl font-bold text-white" href="/" title="qwik">
            The Money Whale ©
          </a>
        </div>
        <ul>
          {!session.value?.user?.name ? (
            <>
              <li>
                <Link class="text-xl" href="/sign-up" target="_blank">
                  Sign-up
                </Link>
              </li>{" "}
              <li>
                <Link class="text-xl" href="/sign-in" target="_blank">
                  Sign-in
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/account" class="text-lg">
                  Hi, {session.value?.user?.name}
                </Link>
              </li>{" "}
              <li>
                <Form action={signOut}>
                  <input type="hidden" name="callbackUrl" />
                  <button class="px-4 py-2 text-black">Sign Out</button>
                </Form>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
});
