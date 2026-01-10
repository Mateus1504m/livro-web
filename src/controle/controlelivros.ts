import { Livro } from "../modelo/livro";

const baseURL = "http://localhost:3030/livros";

export class ControleLivro {
    async obterLivros(): Promise<Array<Livro>> {
        const response = await fetch(baseURL, { method: 'GET' });
        return response.json();
    }

    async excluir(codigo: string): Promise<boolean> {
        const response = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
        return response.ok;
    }

    async incluir(livro: Livro): Promise<boolean> {
        const response = await fetch(baseURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livro)
        });
        return response.ok;
    }
}