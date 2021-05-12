const selectorBreeds = document.querySelector('#selectorbreed');
const imagesDog = document.querySelector('#imagedog');
const charactersDog = document.querySelector('#characters');

document.addEventListener('DOMContentLoaded', ()=> {
    selectorSearchBreeds();
    selectorBreeds.addEventListener('change', consultarBreedsSelector);
})

const obtenerBreeds = breeds => new Promise(resolve =>{
    resolve(breeds);
})

const obtenerBreedsSelector = breeds => new Promise(resolve =>{
    resolve(breeds);
})

function selectorSearchBreeds(){
    const url='https://api.thedogapi.com/v1/breeds';
    fetch(url)
    .then(response => response.json())
    .then(result => obtenerBreeds(result))
    .then(breeds => seleccionarBreeds(breeds))
}

function seleccionarBreeds(breeds){
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        selectorBreeds.appendChild(option);
    }); 
}

function consultarBreedsSelector(e){
    const url=`https://api.thedogapi.com/v1/images/search?breed_id=${e.target.value}`;
    fetch(url)
    .then(response => response.json())
    .then(result => obtenerBreedsSelector(result))
    .then(breeds => seleccionarBreedsSelector(breeds))  
}

function seleccionarBreedsSelector(breeds){
    breeds.map(breed => {
        imagesDog.innerHTML=`
        <img src="${breed.url}" alt="${breed.id}">        
        `;        
    }); 
    charactersDog.innerHTML=`
    <p>Raza: ${breeds[0].breeds[0].name}</p>
    <p>Vida: ${breeds[0].breeds[0].life_span}</p>
    <p>Comportamiento: ${breeds[0].breeds[0].temperament}</p>
    `;   
}

function submitFormulario(e){
    e.preventDefault();
}

