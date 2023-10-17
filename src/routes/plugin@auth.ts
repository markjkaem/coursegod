import { drizzle } from 'drizzle-orm/neon-http';
import { serverAuth$ } from "@builder.io/qwik-auth";
import Google from "@auth/core/providers/google";
import type { Provider } from "@auth/core/providers";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import db  from "../../drizzle/db"

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get("AUTH_SECRET"),
    trustHost: true,
    adapter: DrizzleAdapter(db),
    providers: [
      Google({
        clientId: env.get("GOOGLE_ID")!,
        clientSecret: env.get("GOOGLE_SECRET")!,
      }),
    ] as Provider[],
  }));
