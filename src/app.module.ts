import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionModule } from './session/session.module';

@Module({
  imports: [
    // Conexión a la base de datos MongoDB local
    MongooseModule.forRoot('mongodb://localhost:27017/imprimiendo', {
      // Si quieres que la conexión sea de forma más robusta puedes agregar otros parámetros
    }),
    // Importar el módulo de la sesión
    SessionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
