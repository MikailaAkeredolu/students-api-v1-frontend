import { Component, OnInit } from '@angular/core';
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

  constructor(private data:DataService) { }

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





}
