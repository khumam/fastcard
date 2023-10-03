import { type Code } from "@prisma/client"
import { type Course } from "./course"

export interface Material {
  id: string
  title: string
  content: string
  sequence: string
  courseId: string
  course: Course
  code: Code
  codeId: string
  createdAt: Date
  updatedAt: Date
}