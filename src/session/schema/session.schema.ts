import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';

// Esquema para la sesión
export const SessionSchema = new Schema({
  number: { type: Number, required: true, unique: true }, // Número único
  status: {
    type: String,
    enum: ['active', 'inactive', 'expired', 'waiting', 'finished'],
    required: true,
  },
  files: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }], // Referencias a archivos
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Interfaz para tipificación
export interface Session extends Document {
  number: number; // Número único de la sesión
  status: 'active' | 'inactive' | 'expired' | 'waiting' | 'finished';
  files: mongoose.Types.ObjectId[]; // Referencias a archivos
  createdAt: Date;
  updatedAt: Date;
}
