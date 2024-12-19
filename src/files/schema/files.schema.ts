import { Schema, Document } from 'mongoose';

export const FileSchema = new Schema({
  status: {
    type: String,
    enum: ['active', 'inactive', 'archived'],
    required: true,
  },
  name: { type: String, required: true },
  size: { type: Number, required: true },
  data: { type: Buffer, required: true },
  pages: { type: [Number], default: [] },
  color: { type: String, enum: ['color', 'black-and-white'], required: true },
  copies: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now },
  price: { type: Number, required: true }, // Campo de precio obligatorio como flotante
  session: { type: Number, required: true }, // Campo de sesión como entero obligatorio
});

// Interfaz para tipificación
export interface File extends Document {
  status: 'active' | 'inactive' | 'archived';
  name: string;
  size: number;
  data: Buffer;
  pages: number[];
  color: 'color' | 'black-and-white';
  copies: number;
  createdAt: Date;
  price: number; // Propiedad para el precio como flotante
  session: number; // Propiedad para la sesión como entero
}
