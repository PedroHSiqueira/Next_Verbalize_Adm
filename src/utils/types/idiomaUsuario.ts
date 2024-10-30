import { IdiomaI } from "./idioma";
import { UsuarioI } from "./usuarios";

export interface IdiomaUsuarioI {
    id: string;
    idiomaId: number;
    idioma: IdiomaI;
    usuario: UsuarioI;
  }
  