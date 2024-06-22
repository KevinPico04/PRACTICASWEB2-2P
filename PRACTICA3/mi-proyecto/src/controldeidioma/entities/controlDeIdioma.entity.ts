import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Estudiante } from 'src/estudiante/entities/estudiante.entity';
import { Idioma } from 'src/idioma/entities/idioma.entity';

@Entity({name: 'ControlDeIdioma'})
export class ControlDeIdioma {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.controlDeIdiomas)
  estudiante: Estudiante;

  @Column()
  estudianteId: number;

  @ManyToOne(() => Idioma, (idioma) => idioma.controlDeIdiomas)
  idioma: Idioma;

  @Column()
  idiomaId: number;

  @Column()
  porcentajeLectura: number;

  @Column()
  porcentajeEscritura: number;

  @Column()
  porcentajeEscuchar_hablar: number;

  @Column({ default: 'ACTIVO' })
  estado: string;
}
