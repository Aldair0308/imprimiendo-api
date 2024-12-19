import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesController } from './files.controller';
import { FilesService } from './files.service';
import { FileSchema } from './schema/files.schema';

@Module({
  imports: [
    // Integrar el esquema de Mongoose en el módulo
    MongooseModule.forFeature([{ name: 'File', schema: FileSchema }]),
  ],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
