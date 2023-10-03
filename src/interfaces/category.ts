import { type Course } from "@prisma/client";

export interface Category {
  id: string
  name: string
  Course: Course[]
  createdAt: Date
  updatedAt: Date;
}