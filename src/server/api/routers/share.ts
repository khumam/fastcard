import { createTRPCRouter, publicProcedure } from "u/server/api/trpc";
import { z } from "zod";
export const shareRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.courseShare.findFirst({
        where: {
          courseId: input.id
        },
      });
    }),
  upsert: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.courseShare.upsert({
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
