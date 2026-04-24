import { type JSX } from "react";
import ListagemAlunos from "../../../components/Listagens/ListagemAlunos/ListagemAlunos";
import Navegacao from "../../../components/Navegacao/Navegacao";
import Rodape from "../../../components/Rodape/Rodape";


function PListagemAluno(): JSX.Element {
    return (
        <div className="h-full">
             <Navegacao />
            <ListagemAlunos />
            <Rodape />
        </div>
    );
}

export default PListagemAluno;