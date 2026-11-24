/*
* Author: ProfitCoder
* Date: 24/11/2026
*/

import { api } from "./Api.js";

const principal = document.getElementById("body");
const buscado = document.getElementById("enviar");
const titulo = document.getElementById("titulo");

buscado.addEventListener("click",buscarPeli);

function buscarPeli()
{
    fetch(api + `&s=${titulo.value}`)
    .then(response => response.json())
    .then(
        data => {

            const tarjetas = principal.querySelectorAll("div");

            for (const tarjeta of tarjetas) {
                tarjeta.remove();
            }

            for(const movies of data.Search)
            {
                const divNow = document.createElement("div");

                const p = document.createElement("p");
                const p1 = document.createElement("p");
                const p2 = document.createElement("img");

                
                p.textContent = movies.Title;
                p1.textContent = movies.Year;
                p2.src = movies.Poster;

                divNow.appendChild(p2);
                divNow.appendChild(p);
                divNow.appendChild(p1);

                principal.appendChild(divNow);
            }
        }
    );
}