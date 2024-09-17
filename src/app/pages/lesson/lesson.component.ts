import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  lessons = [
    'Sección 1: Introducción',
    'Sección 2: Instalación de Git',
    'Sección 3: Configuración de Git',
    'Sección 4: Repositorio',
    'Sección 5: Facebook Login',
    'Sección 6: Ignorar archivos',
    'Sección 7: Borrar archivos',
    'Sección 8: Uso de ramas',
    'Sección 9: Github',
    'Sección 10: Material extra',
  ]
}
