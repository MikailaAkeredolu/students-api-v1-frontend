import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
//property or ivars
students: Student[];

  constructor(private data:DataService, private router:Router) { }

  ngOnInit(): void {
    //invoke it when component loads
    this.getAllStudents();
  }

  getAllStudents(){
      this.data.fetchStudents().subscribe(
        response => {
          this.students = response;
          console.log(this.students);
        }
      );
  }

  addStudentButton(){
    // route them to the addStudent component
    this.router.navigate(['add-student']);
  }

  viewStudent(id: number){
    this.router.navigate(['view-student', id]); // view-student/:id
  }





}
