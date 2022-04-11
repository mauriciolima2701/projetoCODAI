//document.getElementById("link-conta").addEventListener("click", function(){
//   console.log("O usuário clicou no link Criar conta.");
//});


const myModal = new bootstrap.Modal("#register-modal"); //função do bootstrap
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//LOGAR NO SISTEMA:

document.getElementById("login-form").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if (!account){ //Quando quiser testar algo que "não tem" colocar o ponto "!" na frente.
        alert("Opps!! Verifique o usuário ou a senha.");
        return;
    }

    if (account){
        if(account.password !== password){
            alert("Opps!! Verifique o usuário ou a senha.")
            return;
        }

        saveSession(email, checkSession);

            window.location.href = "home.html";  //Caso tenha uma conta encaminhe o usuário para a página HOME.HTML
    }

});



//CRIAR CONTA:

document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault(); //Abrir na mesma página

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if(email.length < 5){
        alert("Preencha o campo com um e-mail válido!");
        return;
    }

    if(password.length < 4){
        alert("Preencha a senha com no mínimo 4 dígitos!")
        return;
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide(); //Pegando a variável com a função criada e utilizando o comando para fechar a modal após a conclusão do cadastro.
    alert("Conta criada com sucesso!!!");
});

function checkLogged(){
    if (session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if (logged){
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data)); //Salvando o usuário no Disco local da aplicação, transformando em String

}

function saveSession(data, saveSession){
    if (saveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key){ //Buscando a chave da conta no Storage
    const account = localStorage.getItem(key);

    if (account){
        return JSON.parse(account); //Desfazedo o modo de salvamento no disco (localStorage), transformando a String em Objeto
    }

    return"";
}

