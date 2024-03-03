import { Courses } from "../../courses/models";
import { Students } from "../../students/models";

export interface Inscription {
  id: string | number;
  studentId: string | number;
  courseId: string | number;
  student?: Students;
  course?: Courses;
}

export interface CreateInscriptionData {
  studentId: string | number | null;
  courseId: string | number | null;
}
