import { type Course } from "./course"

export interface Material {
  id: string
  title: string
  content: string
  sequence: string
  courseId: string
  course: Course
  createdAt: Date
  updatedAt: Date
}