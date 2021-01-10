import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CursosDestacadoContainerComponent } from './components/cursos-destacado-container/cursos-destacado-container.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';


@NgModule({
  declarations: [HomeComponent, CursosDestacadoContainerComponent, HeaderComponent, InstructorComponent, InstructorContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
