import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CursosDestacadoContainerComponent } from './components/cursos-destacado-container/cursos-destacado-container.component';
import { HeaderComponent } from './components/header/header.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursoCatContainerComponent } from 'src/app/modules/curso/components/curso-cat-container/curso-cat-container.component';
import { InstructorService } from './services/instructor.service';


@NgModule({
  declarations: [HomeComponent, CursosDestacadoContainerComponent, HeaderComponent, InstructorComponent, InstructorContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [InstructorService]
})
export class HomeModule { }
