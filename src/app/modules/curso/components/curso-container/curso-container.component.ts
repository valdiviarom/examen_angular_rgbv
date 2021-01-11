import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from 'src/app/layout/footer/interfaces/curso';

@Component({
  selector: 'app-curso-container',
  templateUrl: './curso-container.component.html',
  styleUrls: ['./curso-container.component.scss']
})
export class CursoContainerComponent implements OnInit {

  listCurso: any [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
