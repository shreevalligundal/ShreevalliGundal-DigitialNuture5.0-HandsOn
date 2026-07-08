import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Student } from './student';
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  students: Student[] = [
    { id: 101, name: 'Rahul', course: 'Java FSE' },
    { id: 102, name: 'Priya', course: 'Angular' },
    { id: 103, name: 'Amit', course: 'Spring Boot' }
  ];

}