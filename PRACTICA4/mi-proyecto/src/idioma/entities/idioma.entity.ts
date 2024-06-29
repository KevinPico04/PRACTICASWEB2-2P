import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ControlDeIdioma } from '../../controldeidioma/entities/controlDeIdioma.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ name: 'idioma' })
export class Idioma {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  descripcion: string;

  @OneToMany(() => ControlDeIdioma, controlDeIdioma => controlDeIdioma.idioma)
  @Field(() => [ControlDeIdioma], { nullable: true })
  controlDeIdiomas: ControlDeIdioma[];

  @Column({ default: 'ACTIVO' })
  @Field(() => String)
  estado: string;
}
