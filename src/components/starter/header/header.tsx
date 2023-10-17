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
          <a class="text-xl font-bold text-white" href="/" title="qwik">
            MW
          </a>
        </div>
        <ul>
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
                <Link href="/dashboard/overview" class="text-lg">
                  Dashboard
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
