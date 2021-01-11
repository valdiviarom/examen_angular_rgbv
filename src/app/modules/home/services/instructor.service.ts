import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInstructor } from 'src/app/layout/footer/interfaces/instructor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

   url = `http://examen-nh.jcramireztello.com/api/v1/instructor`

  constructor(

    private http: HttpClient

  ) { }

  getInstructor() {
    return this.http.get<IInstructor[]>(`${this.url}`);
  }


}
