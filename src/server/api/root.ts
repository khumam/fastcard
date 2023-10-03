import { createTRPCRouter } from "u/server/api/trpc";
import { categoryRouter } from "./routers/category";
import { cardRouter } from "./routers/card";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  categoryRouter: categoryRouter,
  cardRouter: cardRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
