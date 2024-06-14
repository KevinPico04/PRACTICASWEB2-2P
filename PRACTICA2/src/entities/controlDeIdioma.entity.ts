export class ControlDeIdioma {
  id: number;
  estudianteId: number;
  idiomaId: number;
  porcentajeLectura: number;
  porcentajeEscritura: number;
  porcentajeEscuchar_hablar: number;
  entornoId: number;
  estado: string;

  constructor(
    id: number,
    estudianteId: number,
    idiomaId: number,
    porcentajeLectura: number,
    porcentajeEscritura: number,
    porcentajeEscuchar_hablar: number,
    entornoId: number,
    estado: string
  ) {
    this.id = id;
    this.estudianteId = estudianteId;
    this.idiomaId = idiomaId;
    this.porcentajeLectura = porcentajeLectura;
    this.porcentajeEscritura = porcentajeEscritura;
    this.porcentajeEscuchar_hablar = porcentajeEscuchar_hablar;
    this.entornoId = entornoId;
    this.estado = estado;
  }
}
