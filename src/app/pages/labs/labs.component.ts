import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  welcome = "Welcome to Angular's labs!";
  tasks = [
    'Install Angular CLI',
    'Create an application',
    'Create a component',
    'Generate a service',
  ];

  name = 'Iván';
  age = 32;
  img = 'https://picsum.photos/200/300';

  clickHandler() {
    alert('Hello from the ts file');
  }
}
