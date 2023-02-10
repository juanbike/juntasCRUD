/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';
export const ProductSchema = new mongoose.Schema({
  info: {
    proyecto_id: String,
    cliente: String,
    fecha: String,
    titulo: String,
    elaborado: String,
    proyecto: String,
    tipo: String,
  },
  juntas: [{
    item: Number,
    nominal: String,
    nominal1: Number,
    numero_de_linea_o_sistema: String,
    especificación: String,
    schedule: String,
    tipo_extremos: String,
    tipo_material: String,
    material: String,
    diam_inch_contabilizadas: Number,
    factor_pulgadas_diametrales: Number,
    pulgadas_diametrales: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
});
