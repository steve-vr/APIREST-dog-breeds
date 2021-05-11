const selectorBreeds = document.querySelector('#selectorbreed');

//Obtener selector con datos
const obtenerBreeds = breeds => new Promise(resolve =>{
    resolve(breeds);
})

document.addEventListener('DOMContentLoaded', ()=> {
    consultarBreeds();
})

function consultarBreeds(){
    const url='https://api.thedogapi.com/v1/breeds';

    fetch(url)
    .then(response => response.json())
    .then(result => obtenerBreeds(result))
    .then(breeds => selecionnarBreeds(breeds));
}

function selecionnarBreeds(breeds){
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        selectorBreeds.appendChild(option);
    });
}

