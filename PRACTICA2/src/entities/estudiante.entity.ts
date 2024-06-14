export class Estudiante {
  id: number;
  nombre: string;
  identificacion: string;
  entornoId: number;
  estado: string;

  constructor(id: number, nombre: string, identificacion: string, entornoId: number, estado: string) {
    this.id = id;
    this.nombre = nombre;
    this.identificacion = identificacion;
    this.entornoId = entornoId;
    this.estado = estado;
  }
}
