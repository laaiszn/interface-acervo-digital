import { type JSX } from "react";

function BoasVindas(): JSX.Element {
    return (
        <main className="flex-1 bg-gray-200 flex flex-col items-center justify-center px-4 py-16 sm:py-24 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Acervo Digital
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Seja bem-vindo ao acervo digital. Aqui você encontra uma coleção
                completa de conteúdos organizados e acessíveis para facilitar
                sua pesquisa e aprendizado.
            </p>
        </main>
    );
}

export default BoasVindas;