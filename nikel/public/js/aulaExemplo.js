const nome = "Mauricio Lima";

let nome2 = "Mauricio Silva";

let pessoaDefault = {
    nome: "Mauricio Lima",
    idade: "35",
    trabalho: "desenvolvedor"
}

let nomes = ["Mauricio Lima", "David Lunar", "Vasconsselos da Cunha"]

let pessoas = [
    {
        nome: "Mauricio Lima",
        idade: "35",
        trabalho: "Desenvolvedor"
    },
    {
        nome: "Delfina Moraes",
        idade: "45",
        trabalho: "Varejo"
    },
    {
        nome: "Jagunço Librelato",
        idade: "58",
        trabalho: "Bancário"
    }
];

//console.log(pessoas);
console.log(nomes[2]);

function alterarNome(){
    nome2 = "Pedrin Gomes";
    console.log("Nome alterado com função");
    console.log(nome2);
}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("Nome alterado com função recebendo o nome");
    console.log(nome2);
}


function imprimirPessoa(pessoa){
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}

function imprimirPessoas(){
    console.log("--------------IMPRIMIR PESSOAS-----------");
    pessoas.forEach((item)=> {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
    
        console.log("Trabalho:");
        console.log(item.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Sebastian",
    idade: 28, 
    trabalho: "Motoboy"

});

imprimirPessoas();

//console.log(pessoas);

//imprimirPessoa(pessoaDefault);

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Gomes");
//alterarNome();


