import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlDeIdioma } from 'src/controldeidioma/entities/controlDeIdioma.entity';

@Entity({name: 'estudiante'})
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  identificacion: string;

  @OneToMany(() => ControlDeIdioma, (controlDeIdioma) => controlDeIdioma.estudiante)
  controlDeIdiomas: ControlDeIdioma[];

  @Column({ default: 'ACTIVO' })
  estado: string;
}
