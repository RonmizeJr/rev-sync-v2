// lib/db/schema.ts
import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Users table (connected to Clerk)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: text("clerk_id").notNull().unique(),
  email: text("email").notNull(),
  githubUsername: text("github_username"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at"),
});

// Teams table
export const teams = pgTable("teams", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  ownerId: text("owner_id").references(() => users.clerkId),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at"),
});

// Team Members table
export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  teamId: integer("team_id").references(() => teams.id),
  userId: text("user_id").references(() => users.clerkId),
  role: text("role", {
    enum: ["owner", "admin", "member"],
  }).default("member"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Reviews table
export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  teamId: integer("team_id").references(() => teams.id),
  prUrl: text("pr_url").notNull(),
  title: text("title").notNull(),
  status: text("status", {
    enum: ["pending", "in_progress", "completed"],
  }).default("pending"),
  priority: text("priority", {
    enum: ["low", "medium", "high"],
  }).default("medium"),
  authorId: text("author_id").references(() => users.clerkId),
  reviewerId: text("reviewer_id").references(() => users.clerkId),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at"),
});

// GitHub Installations table
export const githubInstallations = pgTable("github_installations", {
  id: serial("id").primaryKey(),
  teamId: integer("team_id").references(() => teams.id),
  installationId: text("installation_id").notNull(),
  repositories: jsonb("repositories").$type<string[]>(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at"),
});

// Subscriptions table
export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  teamId: integer("team_id").references(() => teams.id),
  stripeCustomerId: text("stripe_customer_id"),
  stripeSubscriptionId: text("stripe_subscription_id"),
  stripePriceId: text("stripe_price_id"),
  status: text("status").default("active"),
  currentPeriodEnd: timestamp("current_period_end"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Usage/Metrics table
export const usage = pgTable("usage", {
  id: serial("id").primaryKey(),
  teamId: integer("team_id").references(() => teams.id),
  month: timestamp("month").notNull(),
  reviewCount: integer("review_count").default(0),
  activeReviewers: integer("active_reviewers").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const teamsRelations = relations(teams, ({ many, one }) => ({
  members: many(teamMembers),
  reviews: many(reviews),
  subscription: one(subscriptions, {
    fields: [teams.id],
    references: [subscriptions.teamId],
  }),
  installation: one(githubInstallations, {
    fields: [teams.id],
    references: [githubInstallations.teamId],
  }),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  team: one(teams, {
    fields: [reviews.teamId],
    references: [teams.id],
  }),
  author: one(users, {
    fields: [reviews.authorId],
    references: [users.clerkId],
  }),
  reviewer: one(users, {
    fields: [reviews.reviewerId],
    references: [users.clerkId],
  }),
}));

export const teamMembersRelations = relations(teamMembers, ({ one }) => ({
  team: one(teams, {
    fields: [teamMembers.teamId],
    references: [teams.id],
  }),
  user: one(users, {
    fields: [teamMembers.userId],
    references: [users.clerkId],
  }),
}));
