
/** Scrivere uno script che recupera i tags dall'api, di questi ne prende dal quinto al decimo e dal quindicesimo al ventesimo 
  *  creare un menù dropdown con i 10 tag recuperati e alla selezione di un elemento del menù  
  *  effettua una chiamata all'api (  https://cataas.com/#/  )recuperando un elemento con il tag selezionato 
  *  di questo elemento, bisogna mostrare nella pagina html la foto del gatto e i tags di quell'elemento 
  *  formattati in questo modo "tag1 - tag2 - tag3"*/



const recuperaApi = async () =>{
    const response = await fetch ('https://cataas.com/api/tags')
    const data = await response.json();
    

    const catsArray = data.slice(5, 10);
    const catsArray2 = data.slice(15, 20);
    const cats = catsArray.concat(catsArray2);
    const select = document.getElementById('cats');

    cats.forEach(element => {
       const option = document.createElement('option');
       select.appendChild(option)
       option.textContent = element
    });

    const recuperaImgCats = async()=>{
        select.addEventListener('change', async()=>{
            const casualCats = await fetch(`https://cataas.com/cat/${select.value}?json=true`)
            const finalCats = await casualCats.json();

            const img = document.createElement('img');
            document.body.appendChild(img);
            img.src = `https://cataas.com${finalCats.url}`

            const tags = document.createElement('h2')
            document.body.appendChild(tags)
            tags.textContent = finalCats.tags.join('-')
        })
    }
    recuperaImgCats()
}
recuperaApi()