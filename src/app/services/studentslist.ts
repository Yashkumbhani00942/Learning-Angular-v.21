import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Studentslist {

  students = [ { id: 1, name: 'Amit', marks: 95 },
    { id: 2, name: 'Priya', marks: 72 },
    { id: 3, name: 'Rahul', marks: 88 },
    { id: 4, name: 'Sneha', marks: 65 } ];

    getStudents(){
      return this.students;
    }
  
}
