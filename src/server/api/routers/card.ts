import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "u/server/api/trpc";
export const cardRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.course.findFirst({
        where: {
          slug: input.slug
        },
        orderBy: {
          title: 'asc'
        }
      });
    }),
  getLatest: publicProcedure
    .query(({ ctx }) => {
      return ctx.db.course.findMany({
        orderBy: {
          createdAt: 'desc'
        },
        take: 2,
        select: {
          id: true
        }
      })
    })
});
