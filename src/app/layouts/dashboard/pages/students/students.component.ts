import { Component, OnInit } from '@angular/core';
import { Students } from './models';
import { LoadingService } from '../../../../core/services/loading.service';
import { StudentsService } from '../../../../core/services/students.service';
import { forkJoin } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
  dataSource: Students[] = [];
  roles: string[] = [];

  constructor(
    private studentsService: StudentsService,
    private loadingService: LoadingService,
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.queryParams)
   }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData(): void {
    this.loadingService.setIsLoading(true)
    forkJoin([
      this.studentsService.getRoles(),
      this.studentsService.getStudents()
    ]).subscribe({
      next: (value) => {
        this.roles = value[0],
          this.dataSource = value[1]
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

  onDeleteStudent(event: Students): void {
    this.loadingService.setIsLoading(true);
    this.studentsService
    .deleteStudent(event.id)
    .subscribe({
      next: (students) => {
        this.dataSource = [...students];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

  onStudentSubmmited(event: Students): void {
    this.loadingService.setIsLoading(true);
    this.studentsService
    .createStudents(event)
    .subscribe({
      next: (students) => {
        this.dataSource = [...students];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }
}
