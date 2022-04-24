export interface User {
    id?: number,
    nome?: string,
    email?: string,
    senha?: string,
    altura?: number,
    peso?: number,
    telefone?: string,
    sexo?: string,
    status?: string,
    perfil?: string,
    nascimento?: string,
    dataHoraCadastro?: string,
    gym?: {
        id: number
    },
    userRegistration?: {
        id: number
    }
}