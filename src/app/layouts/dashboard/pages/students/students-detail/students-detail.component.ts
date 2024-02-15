import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../../../../core/services/students.service';
import { LoadingService } from '../../../../../core/services/loading.service';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrl: './students-detail.component.scss'
})
export class StudentsDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService,
    private loadingService: LoadingService
  ) {
    this.loadingService.setIsLoading(true);
    this.studentService.getStudenById(this.route.snapshot.params['id']).subscribe({
      next: (findedStudent) => {
        console.log(findedStudent);
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }
}
