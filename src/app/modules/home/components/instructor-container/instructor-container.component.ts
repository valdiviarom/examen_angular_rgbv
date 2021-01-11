import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { IInstructor } from 'src/app/layout/footer/interfaces/instructor';


@Component({
  selector: 'app-instructor-container',
  templateUrl: './instructor-container.component.html',
  styleUrls: ['./instructor-container.component.scss']
})
export class InstructorContainerComponent implements OnInit {

  lisInstuctor: IInstructor[] = [];

  constructor(
    private wsInstructorService: InstructorService
  ) { }

  ngOnInit(): void {
    this.getInstructor();
  }
  getInstructor() {
    this.wsInstructorService.getInstructor()
      .subscribe((data: IInstructor[]) => {
        this.lisInstuctor = data;
      });
  }

}
