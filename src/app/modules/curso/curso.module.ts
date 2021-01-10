import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';
import { CursoDetailPageComponent } from './pages/curso-detail-page/curso-detail-page.component';
import { CursoPageComponent } from './pages/curso-page/curso-page.component';
import { CursoCatContainerComponent } from './components/curso-cat-container/curso-cat-container.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CursoContainerComponent, CursoDetailPageComponent, CursoPageComponent, CursoCatContainerComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    SharedModule
  ]
})
export class CursoModule { }
