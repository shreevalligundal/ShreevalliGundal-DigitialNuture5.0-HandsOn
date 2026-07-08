import { Component } from '@angular/core';
import { Header } from './header/header';
import { StudentList } from './student-list/student-list';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, StudentList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}