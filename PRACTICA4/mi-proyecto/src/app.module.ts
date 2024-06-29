import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

// Importa tus módulos
import { EstudianteModule } from './estudiante/estudiante.module';
import { IdiomaModule } from './idioma/idioma.module';
import { ControlDeIdiomaModule } from './controldeidioma/control-de-idioma.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        url: process.env.DATABASE_URL, // URL de conexión a la base de datos
        ssl: {
          rejectUnauthorized: false,  // Necesario si estás usando SSL en PostgreSQL
        },
        autoLoadEntities: true,
        synchronize: true,  // Usa con cuidado en producción
        logging: process.env.NODE_ENV === 'development',  // Habilita el logging solo en desarrollo
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: false, // Deshabilita el playground para evitar conflicto
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({
          // Configuración para Apollo Studio
          footer: true,  // Ajusta esto a `true` para habilitar el pie de página por defecto
        }),
      ],
    }),
    EstudianteModule,
    IdiomaModule,
    ControlDeIdiomaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
