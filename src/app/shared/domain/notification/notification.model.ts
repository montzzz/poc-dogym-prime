export interface Notification {
  id?: number;
  observacao: string;
  titulo: string;
  status: string;
  dataHoraCadastro: string;
  dataFim: string;
  gym?: {
    id: number;
  };
}
