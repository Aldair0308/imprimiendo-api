import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './schema/files.schema';

@Injectable()
export class FilesService {
  constructor(@InjectModel('File') private readonly fileModel: Model<File>) {}

  // Crear un archivo
  async create(createFileDto: CreateFileDto): Promise<File> {
    const newFile = new this.fileModel(createFileDto);
    return newFile.save();
  }

  // Obtener todos los archivos
  async findAll(): Promise<File[]> {
    return this.fileModel.find().exec();
  }

  // Obtener un archivo por ID
  async findOne(id: string): Promise<File> {
    const file = await this.fileModel.findById(id).exec();
    if (!file) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }
    return file;
  }

  // Actualizar un archivo
  async update(id: string, updateFileDto: UpdateFileDto): Promise<File> {
    const updatedFile = await this.fileModel
      .findByIdAndUpdate(id, updateFileDto, { new: true })
      .exec();
    if (!updatedFile) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }
    return updatedFile;
  }

  // Eliminar un archivo
  async remove(id: string): Promise<void> {
    const file = await this.fileModel.findByIdAndDelete(id).exec();
    if (!file) {
      throw new NotFoundException(`File with ID ${id} not found`);
    }
  }
}
