function adicionarNota() {
    let n1, n2, n3, media;
    
    n1 = document.getElementById('nota_1').value;
    n2 = document.getElementById('nota_2').value;
    n3 = document.getElementById('nota_3').value;


    // o parseFloat é pra poder ele converter para números quebrados 
    // o primeiro parentese é pra priorizar a soma antes da divisão
    media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3
    
    /*document.getElementById('media').innerHTML = media;*/

    if(media >= 7){
        document.getElementById('media').textContent = `A sua média é: ${media.toFixed(2)} (Estudante APROVADO)`;
    } else if (media < 4){
        document.getElementById('media').textContent = `A sua média é: ${media.toFixed(2)} (Estudante REPROVADO)`;
    } else {
        document.getElementById('media').textContent = `A sua média é: ${media.toFixed(2)} (Estudande EXAME FINAL)`;
    }
        
}



 