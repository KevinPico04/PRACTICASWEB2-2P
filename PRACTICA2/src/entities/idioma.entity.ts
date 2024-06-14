export class Idioma {
  id: number;
  descripcion: string;
  entornoId: number;
  estado: string;

  constructor(id: number, descripcion: string, entornoId: number, estado: string) {
    this.id = id;
    this.descripcion = descripcion;
    this.entornoId = entornoId;
    this.estado = estado;
  }
}
