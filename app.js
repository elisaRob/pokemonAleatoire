let button =document.getElementById("button");
let image=document.querySelector("img");
let nombre=document.getElementById("number");
let nom=document.getElementById("name")

const changePokemon=async () =>{
    //on veut générer un nombre aléatoire c'est le nombre
    //du pokémon que l'on souhaite récupérer
    let randomNumber=Math.ceil(Math.random()*151) //[0,1[] on va multiplier Math.random
    //par le nombre que l'on souhaiterai.
    //donc on peut obtenir un pokémon entre 0 et 150 on aimerait
    //pouvoir récupérer 151 donc on veut arrondi à la valeur au dessus et pour ce faire
    //on va englober le tout avec Math.cell

    // let requestString=`https://pokeapi.co/api/v2/pokemon/${randomNumber}`;
    let requestString=`https://pokebuildapi.fr/api/v1/pokemon/${randomNumber}`

    //donc à chaque fois qu'on va cliquer sur le bouton ça va appeler cette fonction qui va générer
    //un nombre aléatoire  qui va être injecter dans cette url

    let data=await fetch(requestString);
    //await cela veut dire attends que le fetch est terminé avant de passer à la suite
    console.log(data)

    let response=await data.json();
    console.log(response)

    // image.src=response.sprites.front_default;
    image.src=response.image


    // nombre.textContent=`#${response.id}`;
    nombre.textContent=response.id

    nom.textContent=response.name
}

button.addEventListener("click",changePokemon)