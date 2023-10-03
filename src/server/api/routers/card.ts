import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "u/server/api/trpc";
export const cardRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.course.findFirst({
        where: {
          id: input.id
        },
        include: {
          materials: {
            orderBy: {
              sequence: 'asc'
            },
            include: {
              code: true
            }
          }
        }
      });
    })
});
