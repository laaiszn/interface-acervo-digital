import { type JSX } from "react";

import Navegacao from "../Navegacao/Navegacao";
import LoginForm from "../FormLogin/FormLogin";


// Componente funcional que representa a página de login
function PLogin(): JSX.Element {
    return (
        <div className="pagina-grid">
            {/* Renderiza o cabeçalho da página */}
            <Navegacao />

            {/* Renderiza o formulário de login */}
            {/* <LoginForm /> */}
            <LoginForm />
        </div>
    );
}


export default PLogin;