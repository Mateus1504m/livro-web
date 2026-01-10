import { Editora } from "../modelo/editora";

const editoras: Array<Editora> = [
    { codEditora: 1, nome: "Alta Books" },
    { codEditora: 2, nome: "Pearson" },
    { codEditora: 3, nome: "Addison Wesley" }
];

export class ControleEditora {
    getEditoras(): Array<Editora> {
        return editoras;
    }

    getNomeEditora(codEditora: number): string {
        const result = editoras.filter(ed => ed.codEditora === codEditora);
        return result.length > 0 ? result[0].nome : "";
    }
}