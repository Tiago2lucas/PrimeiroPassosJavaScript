/* Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade  calcule e imprima
a sua média e sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;

*/


const nota1= 7.0;
const nota2 = 5.0;
const nota3 = 8.0;
let media = (nota1+nota2+nota3)/3;
 /* Média menor que 5, reprovação*/
if(media <=5){
console.log("Aluno em Reprovado", media.toFixed(2));

/* Média entre 5 e 7, recuperação */
} else if (media >5 && media <=7){
    console.log("Aluno em recuperação",media.toFixed(2));
} /*  Média acima de 7, passou de semestre*/
else  {

    console.log("Aluno em Aprovado",media.toFixed(2));
}
        
    

