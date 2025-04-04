function Coletarcep() {
    let cep = document.getElementById("cep").value;
    if (validarCep(cep)) {
        Dados(cep);
    } else {
        alert("CEP inválido. Por favor, digite um CEP válido.");
    }
}

// https://viacep.com.br/ws/49063130/json/

async function Dados(cep) {
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json());{
        console.log(dados);
        dadosTela(dados)
    }
    }

    function dadosTela(dados) {
        document.querySelector("#endereco").innerHTML = "Endereço: " + dados.logradouro;
        document.querySelector("#bairro").innerHTML = "Bairro: " + dados.bairro;
        document.querySelector("#cidade").innerHTML = "Cidade: " + dados.localidade;
        document.querySelector("#estado").innerHTML = "Estado: " + dados.uf;
        document.querySelector("#regiao").innerHTML = "Região: " + dados.regiao;
    }
    function Limpar() {
        document.querySelector("#endereco").innerHTML = "Endereço";
        document.querySelector("#bairro").innerHTML = "Bairro";
        document.querySelector("#cep").value = "";
        document.querySelector("#cidade").innerHTML = "Cidade";
        document.querySelector("#estado").innerHTML = "Estado";
        document.querySelector("#regiao").innerHTML = "Região";
    }


function validarCep(cep) {
    const cepPattern = /^[0-9]{5}-?[0-9]{3}$/;
    return cepPattern.test(cep);
}


