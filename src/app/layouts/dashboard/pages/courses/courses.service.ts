import { Injectable } from "@angular/core";
import { delay, finalize, of } from "rxjs";
import { Courses } from "./models";
import { LoadingService } from "../../../../core/services/loading.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment.development";


let courses: Courses[] = [
  {
    id: 1,
    courseName: 'Angular',
    startDate: new Date(),
  },
  {
    id: 2,
    courseName: 'React',
    startDate: new Date(),
  },
  {
    id: 3,
    courseName: 'NodeJS',
    startDate: new Date(),
  }
]

@Injectable()
export class CoursesService {

  constructor(private loadingService: LoadingService, private httpClient: HttpClient) { }

  getCourses() {
    this.loadingService.setIsLoading(true);
    return this.httpClient.get<Courses[]>(`${environment.apiURL}/courses`)
      .pipe(delay(1000),
        finalize(() =>
          this.loadingService.setIsLoading(false)));
  }

  createCourse(data: Courses) {
    courses = [...courses, { ...data, id: courses.length + 1 }];
    return this.getCourses();
  }

  deleteCourseById(id: number) {
    courses = courses.filter((elem) => elem.id != id);
    return this.getCourses()
  }

  updateCourseById(id: number, data: Courses) {
    courses = courses.map((el) => el.id === id ? { ...el, ...data } : el);
    return this.getCourses();
  }
}
