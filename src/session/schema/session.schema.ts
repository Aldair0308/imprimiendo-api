import { Schema, Document } from 'mongoose';

export const SessionSchema = new Schema({
  id_v: { type: Number, required: true },
  status: {
    type: String,
    enum: ['active', 'inactive', 'expired', 'waiting', 'finished'],
    required: true,
  },
  files: { type: [Number], default: [] }, // Arreglo de id_v's
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Aquí exportamos una interfaz que extienda de Document para aprovechar la tipificación en TypeScript
export interface Session extends Document {
  id_v: number;
  status: 'active' | 'inactive' | 'expired' | 'waiting' | 'finished';
  files: number[];
  createdAt: Date;
  updatedAt: Date;
}
