import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  welcome = 'Bienvenido a los laboratorios de Angular';
  tasks = [
    'Instalar Angular CLI',
    'Crear una aplicación',
    'Crear un componente',
    'Generar un servicio',
  ];
}
