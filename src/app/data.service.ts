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

  //Delete a stubet by ID
  deleteStudent(id: number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/v1/students/${id}`);
  }

  editStudent(id:number, student: Student):Observable<Student>{
      return this.http.put<Student>(`http://localhost:8080/api/v1/students/${id}`, student);
  }



}
