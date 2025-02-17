
let amigos = [];
let amigo ;

let invalidos = [""," ", null, undefined,'',' '];


function adicionarAmigo(amigo){
let documento = document.querySelector(".input-name");
amigo = documento.value;

if(invalidos.includes(amigo) ) { alert('Digite um nome válido!'); }

else {
amigos.push(amigo);
alert("O amigo " + amigo + " foi adicionado com sucesso!");
documento.value = '';
adicionarHTML('.name-list','li',amigo);

}


}


function adicionarHTML(local, elementoTag, valor) {
    let documento = document.querySelector(local);
    let elemento = document.createElement(elementoTag);
    elemento.innerHTML = valor;
    documento.appendChild(elemento);
}

function sortearAmigo() {
  
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    alert("O amigo sorteado foi: " + amigoSorteado);
    adicionarHTML('.amigo-sorteado',"h3", "O amigo sorteado foi:"+amigoSorteado);
       
}