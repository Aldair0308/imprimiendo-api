import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: '*', // Permite todas las URLs, puedes especificar un dominio en vez de '*' si lo prefieres.
    methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization', // Cabeceras permitidas
  });

  // Iniciar el servidor
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
