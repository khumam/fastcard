import { createTRPCRouter } from "u/server/api/trpc";
import { categoryRouter } from "./routers/category";
import { cardRouter } from "./routers/card";
import { visitorRouter } from "./routers/visitor";
import { shareRouter } from "./routers/share";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  categoryRouter: categoryRouter,
  cardRouter: cardRouter,
  visitorRouter: visitorRouter,
  shareRouter: shareRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
