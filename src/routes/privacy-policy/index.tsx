import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="mx-auto mt-10 max-w-3xl rounded-lg bg-white p-8 text-black shadow-md">
      <h1 class="mb-4 text-2xl font-semibold text-black">
        {process.env.BASE_URL} - Privacy Policy
      </h1>
      <span>Effective Date: August 14, 2023</span>
      <p class="mt-20">
        Thank you for visiting {process.env.BASE_URL} ("us," "we," or "our").
        Your privacy is important to us. This Privacy Policy outlines how we
        collect, use, and protect your personal information. By using our
        website, you consent to the terms of this Privacy Policy.
      </p>
      <section class="mb-6 mt-10">
        <h2 class="mb-2 text-lg font-semibold text-black">
          Information We Collect
        </h2>
        <p>
          We may collect personal information that you provide to us voluntarily
          through forms, registration processes, or other interactions. This
          information may include your name, email address, contact information,
          and any other details you provide.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold text-black">
          How We Use Your Information
        </h2>
        <p>
          We use the information you provide to improve our services,
          communicate with you, and personalize your experience. We may also use
          your information to send you updates, promotions, and relevant
          content, unless you choose to opt out.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold text-black">
          Information Sharing
        </h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your explicit consent, except for trusted
          third parties who assist us in operating our website, conducting our
          business, or servicing you.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold text-black">
          Cookies and Tracking Technologies
        </h2>
        <p>
          We use cookies and similar tracking technologies to enhance your
          experience on our website. You can adjust your browser settings to
          refuse cookies, but this may limit your ability to use certain
          features.
        </p>
      </section>
      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold text-black">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your
          personal information from unauthorized access, disclosure, alteration,
          or destruction. However, no method of data transmission over the
          internet or electronic storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold text-black">Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these websites. We
          encourage you to review the privacy policies of these sites before
          providing any personal information.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold text-black">
          Children's Privacy
        </h2>
        <p>
          Our website is not intended for children under the age of 18. We do
          not knowingly collect personal information from individuals in this
          age group.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold text-black">Your Choices</h2>
        <p>
          You can update, correct, or delete your personal information by
          contacting us. You can also opt out of receiving promotional
          communications by following the instructions in our emails.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold text-black">
          Changes to this Privacy Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. The date of the
          latest revision will be indicated at the top of the policy. Your
          continued use of our website after any changes signifies your
          acceptance of the updated terms.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold text-black">Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy, please contact us at {process.env.BASE_URL}
        </p>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Course God, Privacy policy",
  meta: [
    {
      name: "description",
      content: "Privacy policy information",
    },
  ],
};
