/*
* Author: ProfitCoder
* Date: 24/11/2026
*/

import { api } from "./Api.js";

const principal = document.getElementById("resultados");
const titulo = document.getElementById("titulo");
const imgReserva = '../img/Posternodisponible.png';

titulo.addEventListener("input",buscarPeli);

function buscarPeli()
{
    fetch(api + `&s=${titulo.value}`)
    .then(response => response.json())
    .then(
        data => {

            //Done for cleaning the historial
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

                if(movies.Poster != null)
                {
                    p2.src = movies.Poster;
                }
                else
                {
                    p2.src = imgReserva;
                }
                

                divNow.appendChild(p2);
                divNow.appendChild(p);
                divNow.appendChild(p1);

                principal.appendChild(divNow);
            }
        }
    );
}