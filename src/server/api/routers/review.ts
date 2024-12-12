// server/routers/review.ts
import { z } from "zod";
import { protectedProcedure, createTRPCRouter } from "../trpc";
import { reviews } from "~/server/db/schema";
import { eq, and } from "drizzle-orm";
import { db } from "~/server/db";

export const reviewRouter = createTRPCRouter({
  // Get all reviews for a team
  getAll: protectedProcedure
    .input(
      z.object({
        teamId: z.string(),
        status: z.enum(["pending", "in_progress", "completed"]).optional(),
      }),
    )
    .query(async ({ input }) => {
      const { teamId, status } = input;

      return db.query.reviews.findMany({
        where: status
          ? and(
              eq(reviews.teamId, parseInt(teamId)),
              eq(reviews.status, status),
            )
          : eq(reviews.teamId, parseInt(teamId)),
        with: {
          author: true,
          reviewer: true,
        },
        orderBy: (reviews, { desc }) => [desc(reviews.createdAt)],
      });
    }),

  // Get a single review
  getById: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return db.query.reviews.findFirst({
        where: eq(reviews.id, parseInt(input.id)),
        with: {
          author: true,
          reviewer: true,
        },
      });
    }),

  // Assign a reviewer to a PR
  assign: protectedProcedure
    .input(
      z.object({
        reviewId: z.string(),
        reviewerId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { reviewId, reviewerId } = input;

      return db
        .update(reviews)
        .set({
          reviewerId,
          status: "in_progress",
          updatedAt: new Date(),
        })
        .where(eq(reviews.id, parseInt(reviewId)));
    }),

  // Update review status
  updateStatus: protectedProcedure
    .input(
      z.object({
        reviewId: z.string(),
        status: z.enum(["pending", "in_progress", "completed"]),
      }),
    )
    .mutation(async ({ input }) => {
      const { reviewId, status } = input;

      return db
        .update(reviews)
        .set({
          status,
          updatedAt: new Date(),
        })
        .where(eq(reviews.id, parseInt(reviewId)));
    }),
});
