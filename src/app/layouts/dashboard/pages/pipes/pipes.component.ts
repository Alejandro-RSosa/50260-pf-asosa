import { Component } from '@angular/core';
import { StudentPipe } from '../../../../shared/full-name.pipe';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  today = new Date();

  student: StudentPipe = {
    firstName: "Pepe",
    lastName: "Prueba",
  }
}
