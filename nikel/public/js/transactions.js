const myModal = new bootstrap.Modal("#transaction-modal"); //função do bootstrap
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

let data = {
    transactions: []
};

document.getElementById("button-logout").addEventListener("click", logout);


//------------ ADICIONAR LANÇAMENTO -------------

document.getElementById("transaction-form").addEventListener("submit", function(e){
    e.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value); //parseFloat = Transformando todo o valor em um FLOAT, número com virgulas.
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value; //Pegando o valor que está marcado(checado)

    //unshift = Adiciona dados um encima do outro, sempre o último lançamento ficará em primeiro. Deiferente do PUSH
    data.transactions.unshift({
        value: value, type: type, description: description, date: date
    });

    saveData(data);
    e.target.reset(); //Limpando todos os campos do formulário, função RESET próprio do formuláio
    myModal.hide();

    getTransactions();
    
    alert("Lançamento adicionado com sucesso!!");
});


checkLogged();


function checkLogged(){
    if (session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if (!logged){ //Se não tiver ninguém logado, mandar de volta para a página INDEX.HTML
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if (dataUser){
        data = JSON.parse(dataUser); // Trocando os dados que estão no localStorage de STRING para OBJETO.
    }

    getTransactions();

};

function logout(){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = "index.html";
}

function getTransactions(){
    const transactions = data.transactions;
    let transactionsHtml = ``;

    if (transactions.length){
        transactions.forEach((item)=>{
            let type = "Entrada";

            if (item.type === "2"){
                type = "Saída";
            }

            transactionsHtml += `
            <tr>
                <th scope="row"> ${item.date} </th>
                    <td>${item.value.toFixed(2)}</td>
                    <td>${type}</td>
                    <td>${item.description}</td>
            </tr>
            `
        })
    }

    document.getElementById("transactions-list").innerHTML = transactionsHtml;
}

function saveData(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}