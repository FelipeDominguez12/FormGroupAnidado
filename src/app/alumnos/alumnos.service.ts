import { Injectable } from '@angular/core';

import { Alumno } from './alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos: Alumno[];

  constructor() { this.alumnos = [] }

  getAlumnos(){
    return this.alumnos;
  }

  agregarAlumno(alum: Alumno){
    this.alumnos.push(alum);
  }

  nuevoAlumno(): Alumno{
    return{
      dni: '',
      nombre: '',
      nota1: 0,
      nota2: 0,
      nota3: 0,
    };
  }
}
