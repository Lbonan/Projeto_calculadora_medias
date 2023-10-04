const form = document.getElementById("form-resultado");
let linhas = "";
let imgAprovado = "<img src=./images/aprovado.png  alt = cara feliz />";
let imgReprovado = "<img src=./images/reprovado.png alt = cara triste />";
const atividade = [];
const nota = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">reprovado</span>';
const notaminima = parseFloat(prompt("Digite a nota mínima"));

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaLinha();
  mediaFinal();
});

function adicionaLinha() {
  const inputDoNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  if (atividade.includes(inputDoNomeAtividade.value)) {
    alert(`O nome da Atividade: (${inputDoNomeAtividade.value}) já foi inserido`);
  } else {
    atividade.push(inputDoNomeAtividade.value);
    nota.push(parseFloat(inputNotaAtividade.value));

    let linha = "<tr>";
    linha += `<td> ${inputDoNomeAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value}</td>`;
    linha += `<td> ${inputNotaAtividade.value >= notaminima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputDoNomeAtividade.value = "";
  inputNotaAtividade.value = "";
}

function atualizaLinha() {
  const corpo = document.querySelector("tbody");
  corpo.innerHTML = linhas;
}

function mediaFinal() {
  const mediaFinal = calculaMediaFinal();

  document.getElementById("media-final-nota").innerHTML = mediaFinal;
  document.getElementById("media-final-valor").innerHTML = mediaFinal >= notaminima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < nota.length; i++) {
    somaDasNotas += nota[i];
  }
  return somaDasNotas / nota.length;
}
