import {Entity, model, property} from '@loopback/repository';

@model()
export class Empresa extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  razonSocial: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoDoc: string;

  @property({
    type: 'string',
    required: true,
  })
  numeroDoc: string;

  @property({
    type: 'string',
  })
  segmentoCliente?: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  @property({
    type: 'string',
  })
  ciudad?: string;

  @property({
    type: 'string',
  })
  pais?: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @property({
    type: 'string',
  })
  correoEmpresarial?: string;

  @property({
    type: 'string',
  })
  nombreContacto?: string;

  @property({
    type: 'string',
  })
  correoContacto?: string;

  @property({
    type: 'date',
  })
  createdAt?: string;

  @property({
    type: 'date',
  })
  updatedAt?: string;


  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
