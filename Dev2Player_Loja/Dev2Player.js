 
var valor_compra = 0
// contador de pontos
var pontos_cliente = 10000
var elementocontador_pontos = document.getElementById("contador_pontos")
var fraseContador_pontos = `vc possui: ${pontos_cliente} Pontos`
elementocontador_pontos.innerHTML = fraseContador_pontos

// adicionar item au carinho
function adicionar_pc_carinho() {
  document.getElementById("pc_carinho").style.display = "block";
  }
function retirar_pc_carinho(){
  document.getElementById("pc_carinho").style.display = "none";
}
function adicionar_cadeira_carinho(){
  document.getElementById("cadeira_carinho").style.display ="block";
}
function retirar_cadeira_carinho(){
  document.getElementById("cadeira_carinho").style.display = "none";
}
function adicionar_teclado_carinho(){
  document.getElementById("teclado_carinho").style.display ="block";
}
function retirar_teclado_carinho(){
  document.getElementById("teclado_carinho").style.display = "none";
}
function adicionar_munitor_carinho(){
  document.getElementById("munitor_carinho").style.display ="block";
}
function retirar_munitor_carinho(){
  document.getElementById("munitor_carinho").style.display = "none";
}
function adicionar_bleze_carinho(){
  document.getElementById("bleze_carinho").style.display ="block";
}
function retirar_bleze_carinho(){
  document.getElementById("bleze_carinho").style.display = "none";
}
function adicionar_mauseped_carinho(){
  document.getElementById("mauseped_carinho").style.display ="block"
}
function retirar_mauseped_carinho(){
  document.getElementById("mauseped_carinho").style.display = "none";
}
function adicionar_roleta_carinho(){
  document.getElementById("roleta_carinho").style.display ="block";
}
function retirar_roleta_carinho(){
  document.getElementById("roleta_carinho").style.display = "none";
}
function adicionar_gifitcrd_carinho(){
  document.getElementById("gifitcrd_carinho").style.display ="block";
}
function retirar_gifitcrd_carinho(){
  document.getElementById("gifitcrd_carinho").style.display = "none";
}
function adicionar_pix_carinho(){
  document.getElementById("pix_carinho").style.display ="block"
}
function retirar_px_carinho(){
  document.getElementById("pix_carinho").style.display = "none";
}

var frasevalor_final = `valor final: ${valor_compra} Pontos`


// navegasao do carinhos
function abrir_carinho() {
  document.getElementById("fundo_loga").style.display = "block";
  document.getElementById("carinho_1").style.display = "block";
  valor_fina.innerText = frasevalor_final
  }
  
function fechar_carinho() {
  document.getElementById("fundo_loga").style.display = "none";
  document.getElementById("carinho_1").style.display = "none";
  document.getElementById("carinho_2").style.display = "none";
  document.getElementById("carinho_3").style.display = "none";
  document.getElementById("carinho_4").style.display = "none";
  }

 
function procimo_1_carinho() {
  document.getElementById("carinho_2").style.display = "block";
  document.getElementById("carinho_1").style.display = "none";
  }
function procimo_2_carinho() {
  document.getElementById("carinho_3").style.display = "block";
  document.getElementById("carinho_2").style.display = "none";
}
function procimo_3_carinho() {
  document.getElementById("carinho_4").style.display = "block";
  document.getElementById("carinho_3").style.display = "none";
}
function carinho_fim() {
  document.getElementById("fundo_loga").style.display = "none";
  document.getElementById("carinho_1").style.display = "none";
  document.getElementById("carinho_2").style.display = "none";
  document.getElementById("carinho_3").style.display = "none";
  document.getElementById("carinho_4").style.display = "none";
}

// funsao carinho_4
 // nome
  var nome_compra = document.getElementById("Nome").value;
  var text_nome = `Nome: ${nome_compra}`;
  confirmaçao_nome.innerText = text_nome;
  // cpf
  var cpf_compra = document.getElementById("cpf").value;
  var text_cpf = `cpf: ${cpf_compra}`;
  document.getElementById("confirmaçao_cpf").textContent = text_cpf;
  // email
  var email_compra = document.getElementById("email").value;
  var text_email = `email: ${email_compra}`;
  document.getElementById("confirmaçao_email").textContent = text_email;
  // telefone
  var telefone_compra = document.getElementById("numero").value;
  var text_telefone = `numero de telefone:  ${telefone_compra}`
  document.getElementById("confirmaçao_telefone").textContent = text_telefone;
  // cep
  var cep_compra = document.getElementById("cep").value;
  var text_cep = `cep: ${cep_compra}`
  document.getElementById("confirmaçao_cep").textContent = text_cep;
  // endereço
  var endereço_compra = document.getElementById("Endereço").value;
  var text_endereço = `endereço:  ${endereço_compra}`
  document.getElementById("confirmaçao_endereço").textContent = text_endereço;
  // nemero
  var numero_compra = document.getElementById("numero_end").value;
  var text_numero = `numero:  ${numero_compra}`
  document.getElementById("confirmaçao_numero").textContent = text_numero;
  // complemento
  var complemento_compra = document.getElementById("Complemento").value;
  var text_complemento = `complemento:  ${complemento_compra}`
  confirmaçao_complemento.innerText = text_complemento