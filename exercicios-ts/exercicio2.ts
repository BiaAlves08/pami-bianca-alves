const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];

function listarCidades(arrayCidades: string[]): void {
    arrayCidades.forEach(cidade => {
        console.log(cidade);
    });
}


listarCidades(cidades);