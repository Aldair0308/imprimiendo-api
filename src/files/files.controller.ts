import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './schema/files.schema';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  async create(@Body() createFileDto: CreateFileDto): Promise<File> {
    return this.filesService.create(createFileDto);
  }

  @Get()
  async findAll(): Promise<File[]> {
    return this.filesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<File> {
    return this.filesService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFileDto: UpdateFileDto,
  ): Promise<File> {
    return this.filesService.update(id, updateFileDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.filesService.remove(id);
  }
}
