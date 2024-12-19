import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './schema/session.schema'; // Importa la interfaz de la sesión

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  // Crear una nueva sesión
  @Post()
  async create(@Body() createSessionDto: CreateSessionDto): Promise<Session> {
    return this.sessionService.create(createSessionDto);
  }

  // Obtener todas las sesiones
  @Get()
  async findAll(): Promise<Session[]> {
    return this.sessionService.findAll();
  }

  // Obtener una sesión por ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Session> {
    return this.sessionService.findOne(id); // Aquí ya no se usa `+id`
  }

  // Actualizar una sesión
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSessionDto: UpdateSessionDto,
  ): Promise<Session> {
    return this.sessionService.update(id, updateSessionDto); // Aquí ya no se usa `+id`
  }

  // Eliminar una sesión
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.sessionService.remove(id); // Aquí ya no se usa `+id`
  }
}
