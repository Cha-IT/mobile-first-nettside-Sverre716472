import meny from '../json/meny.json' with{type: 'json'};
const meny_div = document.querySelector("#meny");


meny.varer.forEach(vare => {
    meny_div.innerHTML += `<li>${vare.navn} - ${vare.pris} kr</li>`
})