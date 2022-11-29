export interface Agendamento {
  status: string;
  data: Date;
  cliente: string;
  pet: string;
  servico: string;
  transporte: Transporte;
  carrapatos: Boolean;
  pulgas: Boolean;
  feridas: Boolean;
  obs: string;
}

enum Transporte {
  CLIENTE = 1,
  BUSCA_ENTREGA = 2,
  BUSCAR = 3,
  ENTREGAR = 4,
}
