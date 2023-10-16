import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <h1 class="font-bold">
        Trending <span class="highlight">money</span>
        <br />
        making <span class="highlight">methods</span>
      </h1>
      <p>Discover new courses, and get notified regularly</p>
      <div class={styles["button-group"]}>
        <Link href="/sign-up">
          <button class="text-black">Create account</button>
        </Link>
        <a
          href="https://qwik.builder.io/docs"
          target="_blank"
          class="button button-dark"
        >
          More information
        </a>
      </div>
    </div>
  );
});
