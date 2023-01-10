let btnJoke=document.getElementById("btn");
let jokeDiv=document.querySelector(".joke");

btnJoke.addEventListener("click",getir);

getir()

async function getir(){
    const config={
        headers:{
            Accept:"application/json"
        }
    }
    const res= await fetch("https://icanhazdadjoke.com" , config);
    const data= await res.json();

    jokeDiv.innerHTML=data.joke

}


// function getir(){
//     const config={
//         headers:{
//             Accept:"application/json"
//         },
//     }
//     fetch("https://icanhazdadjoke.com" , config)
//     .then(res=>res.json())
//     .then(data=>{
//         jokeDiv.innerHTML= data.joke
//     })
// }
