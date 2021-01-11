import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from 'src/app/layout/footer/interfaces/curso';

@Component({
  selector: 'app-curso-cat-container',
  templateUrl: './curso-cat-container.component.html',
  styleUrls: ['./curso-cat-container.component.scss']
})
export class CursoCatContainerComponent implements OnInit {

  @Input() curso: ICurso;
  @Input() coverWitdh: number;


  constructor() { }

  ngOnInit(): void {
  }

}
