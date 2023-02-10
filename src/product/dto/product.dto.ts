/* eslint-disable prettier/prettier */
export class CreateJuntasDTO {
  'info': {
    proyecto_id: string,
    cliente: string,
    fecha: string,
    titulo: string,
    elaborado: string,
    proyect: string,
    tipo: string,
  }
  'juntas':[ {
    item: number,
    nominal: string,
    nominal1: number,
    numero_de_linea_o_sistema: string,
    especificación: string,
    schedule: string,
    tipo_extremos: string,
    tipo_material: string,
    material: string,
    diam_inch_contabilizadas: number,
    factor_pulgadas_diametrales: number,
    pulgadas_diametrales: number,
  }]
}
