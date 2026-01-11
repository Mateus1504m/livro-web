import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditoras';
const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

export default function LivroDados() {
    const opcoes = controleEditora.getEditoras().map(ed => ({ value: ed.codEditora, text: ed.nome }));
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const navigate = useNavigate();

    const tratarCombo = (event) => setCodEditora(Number(event.target.value));

    const incluir = (event) => {
        event.preventDefault();
        const livro = {
            codigo: "",
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n')
        };
        controleLivro.incluir(livro).then(() => navigate("/"));
    };

    return (
        <main className="container">
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label className="form-label">Título</label>
                    <input className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Resumo</label>
                    <textarea className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Editora</label>
                    <select className="form-select" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Autores (1 por linha)</label>
                    <textarea className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Salvar Dados</button>
            </form>
        </main>
    );
}