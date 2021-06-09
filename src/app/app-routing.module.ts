import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ViewStudentComponent } from './view-student/view-student.component';


const routes: Routes = [
  {path:'student-list', component:StudentListComponent},
  {path:'add-student', component: AddStudentComponent},
  {path:'view-student/:id', component: ViewStudentComponent},
  {path: '**', redirectTo: 'student-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
