import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { Session } from './schema/session.schema';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel('Session') private readonly sessionModel: Model<Session>,
  ) {}

  // Crear una nueva sesión
  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const existingSession = await this.sessionModel
      .findOne({ number: createSessionDto.number })
      .exec();
    if (existingSession) {
      throw new ConflictException(
        `Session with number ${createSessionDto.number} already exists`,
      );
    }
    const session = new this.sessionModel(createSessionDto);
    return session.save();
  }

  // Obtener todas las sesiones
  async findAll(): Promise<Session[]> {
    return this.sessionModel.find().exec();
  }

  // Obtener una sesión por ID
  async findOne(id: string): Promise<Session> {
    const session = await this.sessionModel.findById(id).exec();
    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }
    return session;
  }

  // Actualizar una sesión
  async update(
    id: string,
    updateSessionDto: UpdateSessionDto,
  ): Promise<Session> {
    const updatedSession = await this.sessionModel
      .findByIdAndUpdate(id, updateSessionDto, { new: true })
      .exec();
    if (!updatedSession) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }
    return updatedSession;
  }

  // Eliminar una sesión
  async remove(id: string): Promise<void> {
    const session = await this.sessionModel.findByIdAndDelete(id).exec();
    if (!session) {
      throw new NotFoundException(`Session with ID ${id} not found`);
    }
  }
}
