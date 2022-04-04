/* Creare un bottone che al click esegua una chiamata HTTP verso l'endpoint
https://v2.jokeapi.dev/joke/Programming.
Utilizzando async e await:
Stampare nella console il risultato della chiamata di rete
Stampare in un H3 la proprietà setup
Stampare in un paragrafo la proprietà delivery
Se una delle due proprietà non esiste all'interno della risposta far comparire
un'alert con il testo "Proprietà non esistente!"
Al click del bottone deve essere effettuata una nuova chiamata di rete e il DOM deve
agg
 deve
aggiornarsi con i nuovi dati. */
const body = document.querySelector('body');


const btn = document.querySelector('button')


const funzioneAsync = async () =>{
    const response =  await fetch('https://v2.jokeapi.dev/joke/Programming')
    const data = await response.json();

    console.log(data)

    if(!data.setup || !data.delivery){
        alert("Propieta non esiste")
    }

    const h3 = document.createElement('h3');
    h3.textContent = `${data.setup}` 
    body.appendChild(h3)

    console.log(h3)

    const p = document.createElement('p');
    p.textContent = `${data.delivery}` 
    body.appendChild(p)
    console.log(p)

};
btn.addEventListener("click", funzioneAsync);

