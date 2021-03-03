import { Persona } from './../persona';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  id: number;
  nombre: string;
  telefono; string;
  personas: Persona[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  agregar(id: number, nombre: string, telefono: string): void {
    this.personas.push({id, nombre, telefono});
  }

}
