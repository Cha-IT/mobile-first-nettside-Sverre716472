
import hjemmeside from '../json/hjemmeside.json' with{type: 'json'};
const introduksjon = document.querySelector("#introduksjon");
introduksjon.innerHTML = `${hjemmeside.kafe.introduksjon}`
console.log(navigator.userAgent);