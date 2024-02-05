import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { Courses } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  displayedColumns = ['id', 'courseName', 'startDate', 'actions']

  courses: Courses[] = [];

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    ) {

    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      }
    })
  }

  onCreate(): void {
    this.dialog.open(CourseDialogComponent)
    .afterClosed()
    .subscribe({
      next: (result) => {
        if (result) {
          this.coursesService.createCourse(result).subscribe({
            next: (courses) => (this.courses = courses),
          })
        }
      }
    })
  }

  onEdit(course: Courses) {
    this.dialog.open(CourseDialogComponent, {
      data: course,
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.coursesService.updateCourseById(course.id, result).subscribe({
            next: (courses) => (this.courses = courses)
          })
        }
      }
    })
  }

  onDeleteCourse(id: number) {
    this.coursesService.deleteCourseById(id).subscribe({
      next: (courses) => {
        this.courses = courses;
      }
    })
  }
}
