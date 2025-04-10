import meny from '../json/meny.json' with{type: 'json'};
const meny_div = document.querySelector("#meny");

let handlekurv = [];
let legg_til = [];
let trekke_fra = [];




meny.varer.forEach((vare, index)  => {
   
    handlekurv.push(0);
    const btn_legg_til = document.createElement("button");
    btn_legg_til.textContent = "+";
    btn_legg_til.addEventListener("click", () => legg_tilVare(index));
    


    const btn_trekk_fra = document.createElement("button");
    btn_trekk_fra.textContent = "-";
    btn_trekk_fra.addEventListener("click", () => trekke_fraVare(index));
   
    const antall = document.createElement("div");
    antall.id = "varenummer" + index.toString();
    antall.textContent = handlekurv[index].toString() + " " + vare.navn + " - " + vare.pris + " kr";
    legg_til.push(btn_legg_til);
    trekke_fra.push(btn_trekk_fra);


    const listItem = document.createElement("li");
    //listItem.textContent = varenummer.toString()+ `${vare.navn} - ${vare.pris} kr`;

    listItem.appendChild(antall);
    listItem.appendChild(btn_legg_til);
    listItem.appendChild(btn_trekk_fra);
    //listItem.textContent += varenummer.toString()+ `${vare.navn} - ${vare.pris} kr`;

    meny_div.appendChild(listItem);

    meny_div.appendChild(listItem);
    console.log();

})

function legg_tilVare(index) {
    handlekurv[index] += 1;
    const antall = document.querySelector("#varenummer" + index.toString()); // Correct query
    antall.textContent = handlekurv[index].toString()+ " " + meny.varer[index].navn + " - " + meny.varer[index].pris + " kr";
    console.log(handlekurv);
}

function trekke_fraVare(index) {
    if (handlekurv[index] <= 0) {
        return;
    }
    handlekurv[index] -= 1;
    const antall = document.querySelector("#varenummer" + index.toString()); // Correct query
    antall.textContent = handlekurv[index].toString()+ " " + meny.varer[index].navn + " - " + meny.varer[index].pris + " kr";
    console.log(handlekurv);
}