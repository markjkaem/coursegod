
import Stripe from "stripe";
import db from "../../drizzle/db";
import { users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { env } from "process";
import { EnvGetter } from "@builder.io/qwik-city/middleware/request-handler";


const stripe = new Stripe(env.STRIPE_TEST_KEY!, {
  apiVersion: "2023-10-16",
});

export const subscriptionList = {
  normal: {
    type: "Normal",
    id: "price_1O2BnGJ0Tu9paWkWF45pLKC4",
  },
  premium: {
    type: "Premium",
    id: "price_1O2Bo6J0Tu9paWkWpeXt2hMP",
  },

  legend: {
    type: "Legend",
    id: "price_1O2Ml8J0Tu9paWkWxLrkwLp4",
  },
};


export const filterSubscriptions = (subscriptions: any) => {
    const activeSubscriptions = subscriptions.data.filter(
        (item: any) => item.status === "active",
      );
  
      const activeSubscriptionIds = activeSubscriptions.map(
        (item: any) => item.plan.id,
      );
      const isLegendPlan = activeSubscriptionIds.filter(
        (id: any) => id === subscriptionList.legend.id,
      );
      const isPremiumPlan = activeSubscriptionIds.filter(
        (id: any) => id === subscriptionList.premium.id,
      );
      const isNormalPlan = activeSubscriptionIds.filter(
        (id: any) => id === subscriptionList.normal.id,
      );
      return {isLegendPlan, isPremiumPlan, isNormalPlan}
      }

export const currentSubscription = async (email: string) => {
 
    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, email as string));

    if (!user[0].stripe_id) {
      return { courses: false, plan: "No Subscription" };
    }
    const subscriptions = await stripe.subscriptions.list({
      customer: user[0].stripe_id as string,
    });
    const { isLegendPlan, isNormalPlan, isPremiumPlan } =
      filterSubscriptions(subscriptions);

    if (isLegendPlan[0]) {
      return {
        courses: true,
        plan: subscriptionList.legend.type,
      };
    } else if (isPremiumPlan[0]) {
      return {
        courses: true,
        plan: subscriptionList.premium.type,
      };
    } else if (isNormalPlan[0]) {
      
      return {
        courses: true,
        plan: subscriptionList.normal.type,
      };
    } else {
      return {
        courses: false,
        plan: "No Subscription",
      };
    }
}