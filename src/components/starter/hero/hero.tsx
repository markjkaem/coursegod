import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <h1 class="font-bold">
        Top trending <span class="highlight">money</span>
        <br />
        making <span class="highlight">methods</span>
      </h1>
      <p>Discover the latest courses, and learn how other people make bank</p>
      <div class={styles["button-group"]}>
        <Link href="/sign-in">
          <button class="text-black">Create account</button>
        </Link>
        <Link href="/#services" class="button button-dark">
          More information
        </Link>
      </div>
    </div>
  );
});
