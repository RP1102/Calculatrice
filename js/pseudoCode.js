/*

Etape 1 : 
    - taper les chiffre sur la calculatrice -> les afficher dans la barre de texte

    - lorsque que l'utilisateur tape sur un des boutons ( + - * / = ) -> enregistrer le nombre sur la barre de texte dans 
    une variable, enregistrer l'opérateur dans une autre variable, remettre la barre de texte à vide

    - taper un nouveau nombre 

    - lorsqu'un nouvel opérateur est taper, faire l'opération nombre1 opérateur nombre2, placer le resultat 
    de cette opération dans une variable. Remettre à vide le champ de texte


    [INITIALISATION]
        champ_de_texte = vide (cdt)
        var1 = 0
        op = null
        op2 = null

    [UITILISATEUR TAPE DES CHIFFRES]
        cdt != vide
    [LORSQU'UN OPERATEUR EST TAPÉ]
        var1 = cdt
        op = opérateur tapé
        op2 = op
        cdt = vide
    [UITILISATEUR TAPE DES CHIFFRES]
        cdt != vide
    [LORSQU'UN NOUVEL OPERATEUR EST TAPÉ]
        var1 = var1 op2 cdt
        op2 = op
        cdt = vide

    ________________________________________________________________________________________________________________________

    let champ_de_texte = null
    let nb1 = 0
    let op = null
    let op2 = op



*/

// INITIALISATION //
let calculation = []
let champDeTexte = document.getElementById("result")
let nb1 = 0
let op = null
let op2 = null

/*
Pour clear le champ de texte
*/

const acButton = document.getElementById("ac")
acButton.addEventListener("click", function(){
    champDeTexte.textContent = ""
    calculation = []
})

/* 
Pour tous les chiffres sur la calculatrice,
ajouter la valeur au champ de texte
*/
let numbersList = document.getElementsByClassName("number")

for (let index = 0; index < numbersList.length; index++) {
    numbersList[index].addEventListener("click",function(){
        champDeTexte.textContent += this.value
        calculation.push(parseInt(this.value))
        console.log(calculation)
    })
    
}

/*
Pour tout opérateur, s'il un op est tapé,
sauter une ligne dans le cdt ecrire l'op , 
sauter une autre ligne
 */

let operatorsList = document.getElementsByClassName("operator")
const newline = "\r\n";
for (let index = 0; index < operatorsList.length; index++) {
    operatorsList[index].addEventListener("click", function(){
        champDeTexte.textContent += newline + this.value + newline
        // console.log(champDeTexte.textContent)
        calculation.push(this.value)
        console.log(calculation)
    })
    
}

const equalBtn = document.getElementById("equal")
equalBtn.addEventListener("click", function(){
    let nb = 0
    let nbStock = nb
    let res = 0
    let o = ""
    let nbOp = 0
    if (calculation[0] == '×' || calculation[0] == '÷') {
        console.log("erreur : opérateur de multiplication ou de division en premier element")
        champDeTexte.textContent = "Error"
    } else {
        for (let index = 0; index < calculation.length; index++) {
            if (typeof calculation[index] == 'number') {
                nb = nb*10 + calculation[index] 
            }
            else if (typeof calculation[index] == 'string') {
                if (o == "") {
                    nbStock = nb
                    nb = 0
                    o = calculation[index]
                }
                else{
                    switch (o) {
                        case '+':
                            res = nbStock + nb
                            break;
                        case '-':
                            res = nbStock - nb
                            break;
                        case '×':
                            res = nbStock * nb
                            break;
                        case '÷':
                            res = nbStock / nb
                            break;
                        default:
                            console.log("erreur : opérateur non reconnu")
                            break;
                    }
                    nbStock = res
                    nb = 0
                    o = calculation[index]
                }
                nbOp ++
            }
            else{
                console.log("erreur : element dans la liste non reconnu")
            }
            console.log("À l'indice " + index + " le resultat du calcul est " + res)
        }
        if (nbOp == 1) {
            res = nbStock
        }
        console.log("resultat final " + res)
        champDeTexte.textContent = res
    }
    
    
})
