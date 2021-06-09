import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Student } from '../student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
//property for student
student = new Student();

  constructor(private data:DataService, private activatedRoute:ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];

    this.data.fetchStudentById(id).subscribe(
      response => {
        this.student = response;
      }
    );

  }

  updateStudentButton(id:number, student:Student){
      this.data.editStudent(id, student).subscribe(
        response=>{
          this.router.navigate(['student-list']);
        },
        error => console.log(error)
      );
  }

}
