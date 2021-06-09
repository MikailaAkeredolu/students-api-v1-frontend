import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Student } from '../student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
//property or instance variable
student = new Student();

  constructor(private data: DataService, private router:Router) { }

  ngOnInit(): void {
  }

  submitStudentButton(){
    this.data.addStudent(this.student).subscribe(
      response =>{
        // do something
        this.router.navigate(['student-list']);
      }
    )
  }

}
