import { Cliente } from './cliente';
import { Pet } from './pet';

export interface Agendamento {
  status: string;
  data: Date;
  cliente: Cliente;
  pet: Pet;
  servico: string;
  transporte: Transporte;
  carrapatos: Boolean;
  pulgas: Boolean;
  feridas: Boolean;
  obs: string;
}

export enum Transporte {
  CLIENTE = 1,
  BUSCA_ENTREGA = 2,
  BUSCAR = 3,
  ENTREGAR = 4,
}
