import { createTRPCRouter, publicProcedure } from "u/server/api/trpc";
import { z } from "zod";
export const visitorRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.courseVisitor.findFirst({
        where: {
          courseId: input.id
        },
      });
    }),
  upsert: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.courseVisitor.upsert({
        where: {
          courseId: input.id
        },
        update: {
          total: {
            increment: 1
          }
        },
        create: {
          courseId: input.id,
          total: 1
        }
      });
    }),
});
