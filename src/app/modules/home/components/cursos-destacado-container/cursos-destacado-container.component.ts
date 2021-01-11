import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from 'src/app/layout/footer/interfaces/curso';

@Component({
  selector: 'app-cursos-destacado-container',
  templateUrl: './cursos-destacado-container.component.html',
  styleUrls: ['./cursos-destacado-container.component.scss']
})
export class CursosDestacadoContainerComponent implements OnInit {

  @Input() curso: ICurso;
  @Input() coverWitdh: number;

  constructor() { }

  ngOnInit(): void {
this.curso = {
      id: 1,
      name: 'Curso Angular 10',
      feature: true,
      image: 'https://rubensa.files.wordpress.com/2017/10/angular.png',
      language: 'es',
      price: 45.0,
      duration: 25,
      lessons: 1,
      deadline: '2021-05-12',
      students: 30,
      sumary: 'Angualar es un lenguaje de programación interesante para el desarrollo de una web',
      instructor: 2,
      category: 15
}


  }

}
