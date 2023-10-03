import { createTRPCRouter, publicProcedure } from "u/server/api/trpc";
export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany({
      include: {
        Course: true
      }
    });
  }),
});
