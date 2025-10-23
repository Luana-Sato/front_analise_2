
/*  Pessoas com idade entre 18 e 70 anos pode entrar.
Pessoas maiores de 70 precisam de acompanhante.
Menores, vazam!
*/

const idade = 22

if(idade >=18 && idade <= 70) {
    alert('Você tem' + idade + 'anos \nPode entrar no baile!')
    }   else if (idade > 70) {
     alert ('Você tem' + idade + ' anos \nPrecisa de um acompanhante para entrar no baile!')
     } else if (idade < 18) {
     alert ('Vaza, menor')
     }
     else {
        alert('Por favor digite um número para idade!')
    }
