import { Setor } from "../setor/setor";
import { Cargo } from "../cargo/cargo";

export class Funcionario {

  id: number;

  matricula: string;

  pessoa: string;

  admissao: Date;

  ativo: boolean = false;

  salario: number;

  setor: Setor;

  cargo: Cargo;

}
