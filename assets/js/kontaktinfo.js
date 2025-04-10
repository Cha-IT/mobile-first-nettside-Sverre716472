import info from "../json/kontaktinfo.json" with{ type: "json" };
const kontaktinfo_div = document.querySelector("#kontaktinfo");
kontaktinfo_div.innerHTML += `<li>Telefonnummer: ${info.kontaktinfo.telefonnummer}</li>`;
kontaktinfo_div.innerHTML += `<li>Beliggenhet: ${info.kontaktinfo.beliggenhet}</li>`;
console.log(info.kontaktinfo);