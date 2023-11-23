import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <span class="-z-10 text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-7xl">
        Top Trending <span class="highlight">Money</span>
        <br />
        Making <span class="highlight">Courses</span>
      </span>
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
