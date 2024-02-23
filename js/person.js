document.addEventListener('DOMContentLoaded', ()=>{
    const urlParam = new URLSearchParams(window.location.search)
    // console.log(urlParam.get('index'))
    const indexParam = urlParam.get('index')
    // console.log(indexParam)

    const url = `https://swapi.dev/api/people/${Number.parseInt(indexParam)+1}/`
    console.log(url)
    fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error('Error!'+response.status)
        }return response.json()
    })
    .then((data) => {
        persona(data)
    })
    .catch((err) => console.log(err))

    function persona(item) {
        const personagemImg = document.querySelector('.personagem-img')
        const nome = document.getElementById('name')
        const genero = document.getElementById('genero')
        const altura = document.getElementById('altura')
        const peso = document.getElementById('peso')
        const corCabelo = document.getElementById('cor-cabelo')
        const corOlho = document.getElementById('cor-olho')
        const corPele = document.getElementById('cor-pele')
        const dataNascimento = document.getElementById('data-nascimento')

        personagemImg.src = `../image/perso${indexParam}.png`
        nome.innerHTML = `Nome: ${item.name}`
        genero.innerHTML = `Gênero: ${item.gender}`
        altura.innerHTML = `Altura: ${item.height}`
        peso.innerHTML = `Peso: ${item.mass}`
        corCabelo.innerHTML = `Cor do Cabelo: ${item.hair_color}`
        corOlho.innerHTML = `Cor do Olho: ${item.eye_color}`
        corPele.innerHTML = `Cor da Pele: ${item.skin_color}`
        dataNascimento.innerHTML = `Peso: ${item.birth_year}`
    }
})