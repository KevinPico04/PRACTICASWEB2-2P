import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Estudiante } from '../../estudiante/entities/estudiante.entity';
import { Idioma } from '../../idioma/entities/idioma.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'ControlDeIdioma' })
export class ControlDeIdioma {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @ManyToOne(() => Estudiante, estudiante => estudiante.controlDeIdiomas)
  @Field(() => Estudiante)
  estudiante: Estudiante;

  @Column()
  @Field(() => ID)
  estudianteId: number;

  @ManyToOne(() => Idioma, idioma => idioma.controlDeIdiomas)
  @Field(() => Idioma)
  idioma: Idioma;

  @Column()
  @Field(() => ID)
  idiomaId: number;

  @Column()
  @Field(() => Number)
  porcentajeLectura: number;

  @Column()
  @Field(() => Number)
  porcentajeEscritura: number;

  @Column()
  @Field(() => Number)
  porcentajeEscuchar_hablar: number;

  @Column({ default: 'ACTIVO' })
  @Field(() => String)
  estado: string;
}
