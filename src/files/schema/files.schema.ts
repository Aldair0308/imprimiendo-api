import { Schema, Document } from 'mongoose';

export const FileSchema = new Schema({
  id_v: { type: Number, required: true },
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
});

export interface File extends Document {
  id_v: number;
  status: 'active' | 'inactive' | 'archived';
  name: string;
  size: number;
  data: Buffer;
  pages: number[];
  color: 'color' | 'black-and-white';
  copies: number;
  createdAt: Date;
}
