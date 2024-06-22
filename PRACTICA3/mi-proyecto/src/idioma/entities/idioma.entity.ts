import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlDeIdioma } from 'src/controldeidioma/entities/controlDeIdioma.entity';

@Entity({name: 'idioma'})
export class Idioma {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @OneToMany(() => ControlDeIdioma, (controlDeIdioma) => controlDeIdioma.idioma)
  controlDeIdiomas: ControlDeIdioma[];

  @Column({ default: 'ACTIVO' })
  estado: string;
}
