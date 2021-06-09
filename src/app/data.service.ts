import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http:HttpClient) { }


  //Get all
  fetchStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`http://localhost:8080/api/v1/students/`);
  }

  //POST
  addStudent(student:Student){
      return this.http.post<Student>(`http://localhost:8080/api/v1/students/`, student);
  }

  //Get Student By ID

  fetchStudentById(id: number):Observable<Student>{
    return this.http.get<Student>(`http://localhost:8080/api/v1/students/${id}`);
  }



}
