import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="mx-auto mt-10 max-w-3xl rounded-lg bg-white p-8 text-black shadow-md">
      <h1 class="mb-4 text-2xl font-semibold text-black">
        {process.env.BASE_URL} - Terms and Conditions
      </h1>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold">1. Acceptance of Terms</h2>
        <p>
          Welcome to {process.env.BASE_URL}! By accessing and using this
          Website, you are agreeing to abide by the following Terms and
          Conditions. If you do not agree with any part of these terms, please
          refrain from using the Website. These Terms govern your use of{" "}
          {process.env.BASE_URL} and all associated services.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold">2. User Accounts and Access</h2>
        <p>
          <strong>2.1 Age Requirement:</strong> {process.env.BASE_URL} is open
          to all users, regardless of age. There are no age restrictions for
          using the Website.
        </p>
        <p>
          <strong>2.1 User Accounts:</strong> To make purchases, customers are
          required to create an account. Your personal information, including
          passwords, will be treated with utmost security and stored using
          advanced encryption techniques to safeguard your privacy, and we will
          use the OAuth or OAuth2 provider terms. It is safe to sign in with any
          provider we offer.
        </p>
      </section>
      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold">
          3. Acceptance of Terms for Purchase
        </h2>
        <p>
          <strong>3.1 Checkout Confirmation: </strong>By proceeding with the
          checkout process and completing your purchase, you acknowledge that
          you have read, understood, and agree to these Terms and Conditions.
          Your purchase serves as your electronic acceptance of these terms.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold">4. Payment and Security</h2>
        <p>
          <strong>4.1 Payment Options: </strong> We accept a wide range of
          payment methods to accommodate your preferences. Whether you prefer
          credit cards, debit cards, or other popular digital payment options,
          we've got you covered.
        </p>
        <p>
          <strong>4.2 Secure Transactions:</strong>Your payment security is of
          paramount importance to us. All payment transactions are processed
          securely by Stripe, utilizing advanced encryption technology to ensure
          your financial information remains confidential and protected.
        </p>
        <p>
          <strong>4.3 Shipping Costs: </strong>A flat shipping fee of €4.50
          applies to all orders. This ensures a transparent and consistent
          shipping cost for your convenience.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold">5. Shipping and Delivery</h2>
        <p>
          <strong>5.1 Delivery Time: </strong> We offer a single shipping
          option, which is standard delivery. Our estimated delivery time ranges
          from 2 to 4 business days, depending on your location and the volume
          of orders being processed.
        </p>
        <p>
          <strong>5.2 Shipping Fee:</strong>The fixed shipping fee for all
          orders is €4.50 . This fee contributes to the secure and timely
          delivery of your purchases to your doorstep.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold">6. Intellectual Property</h2>
        <p>
          <strong>6.1 Copyright Protection: </strong> All images, graphics, and
          content present on the Website are the intellectual property of The
          Money Whale. Unauthorized use, reproduction, or distribution of our
          content is strictly prohibited without prior written consent.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold">
          7. Privacy and Data Protection
        </h2>
        <p>
          <strong>7.1 Data Collection: </strong> We collect customer data with
          your explicit consent through the use of cookies. These cookies allow
          us to enhance your browsing experience and provide you with tailored
          content and offerings.
        </p>
        <p>
          <strong>7.2 Privacy Compliance: </strong> Your privacy matters to us.
          We are fully compliant with relevant data protection regulations,
          ensuring that your personal information is handled responsibly and in
          accordance with legal requirements.
        </p>
        <p>
          <strong>7.3 Cookies and Tracking: </strong> If you choose to disallow
          cookies, we will respect your preference. In this case, we'll utilize
          a disallowed cookie indicator to track your interactions without
          storing any personal data.
        </p>
      </section>
      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold">
          8. User-Generated Content and Interactions
        </h2>
        <p>
          <strong>8.1 Customer Reviews: </strong> We value your feedback and
          encourage customers to leave reviews about their experiences. However,
          we kindly ask that your reviews and interactions remain respectful,
          truthful, and relevant to the products and services provided on our
          platform.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold">
          9. Limitation of Liability and Disclaimers
        </h2>
        <p>
          <strong>9.1 Damaged Products: </strong> In the unfortunate event that
          you receive a damaged or defective product, please contact our support
          team at support@{process.env.BASE_URL}. Attach pictures of the damaged
          item, and we will work to resolve the issue promptly.
        </p>
      </section>

      <section class="mb-6">
        <h2 class="mb-2 text-lg font-semibold">10. Customer Support</h2>
        <p>
          <strong>10.1 Assistance and Inquiries: </strong>Should you have any
          questions, concerns, or inquiries, please do not hesitate to reach out
          to our dedicated customer support team at support@
          {process.env.BASE_URL}. We aim to respond to your queries within 2
          working days.
        </p>
      </section>
    </div>
  );
});
