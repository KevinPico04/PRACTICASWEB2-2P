import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlDeIdioma } from '../../controldeidioma/entities/controlDeIdioma.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'estudiante' })
export class Estudiante {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  nombre: string;

  @Column({ unique: true })
  @Field(() => String)
  identificacion: string;

  @OneToMany(() => ControlDeIdioma, controlDeIdioma => controlDeIdioma.estudiante)
  @Field(() => [ControlDeIdioma], { nullable: true })
  controlDeIdiomas: ControlDeIdioma[];

  @Column({ default: 'ACTIVO' })
  @Field(() => String)
  estado: string;
}
