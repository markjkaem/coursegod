import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import styles from "./footer.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <div class={styles.anchor}>
          <div class="mb-2 flex gap-2 ">
            <Link href="/terms" class="text-white" target="_blank">
              Terms
            </Link>
            <Link href="/privacy-policy" class="text-white" target="_blank">
              Privacy Policy
            </Link>
            <Link href="/#faq" class="text-white" target="_blank">
              FAQ
            </Link>
          </div>
          <span>Made with ♡ by Builder.io</span>
          <span class={styles.spacer}>|</span>
          <span>{serverTime.value.date}</span>
        </div>
      </div>
    </footer>
  );
});
