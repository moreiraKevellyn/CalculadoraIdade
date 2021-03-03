function verificador() {
    var data = new Date(); // Data do Sistema
    var ano = data.getFullYear(); // Ano do sistema
    var anoNasc = document.getElementById("txtnasci"); //Variavel recebendo o valor do Ano de nascimento do usuário
    var resultado = document.getElementById("resultado"); //Variavel recebendo o valor o resultado de tudo
    if(anoNasc.value.length == 0 || Number(anoNasc.value) > ano) { // caso o usuário digite valores inválidos na idade
        alert("[Erro] Verifique os dados e tente novamente")
    } else { 
        var sexo = document.getElementsByName("radsexo"); //recupera o valor o sexo escolhido pelo usuário
        var idade = ano - Number(anoNasc.value); //calculo da idade 
        var genero = "";
        var img = document.createElement('img'); //criar a tag img
        img.setAttribute('id', 'foto') // adicionando o Id foto na tag img
        if(sexo[0].checked) { //homem é 0 e mulher é 1 de acordo com o radsexo
            genero = "Homem"
            if(idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src','img/h-crianca.png')
            } else if(idade <21){
                //Jovem
                img.setAttribute('src','img/h-jovem.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src','img/h-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src','img/h-idoso.png')
            }
        } else {
            genero = "Mulher"
            if(idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src','img/m-crianca.png')
            } else if(idade <21){
                //Jovem
                img.setAttribute('src','img/m-jovem.png')
            } else if (idade < 50){
                //Adulta
                img.setAttribute('src','img/m-adulta.png')
            } else {
                //Idosa
                img.setAttribute('src','img/m-idosa.png')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} de ${idade} anos` 
        resultado.appendChild(img) //criando um elemento filho de resultado que será a img
    }
}