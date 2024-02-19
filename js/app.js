document.addEventListener('DOMContentLoaded', function(){
    const baseURL = 'https://swapi.dev/api/people/'

    fetch(baseURL)
    .then((response)=> {
        if(!response.ok){
            throw new Error(`Erro de rede! Código: ${response.status}`)
        }
        return response.json() //precisa do return
    })
    .then((data) =>{
        console.log(data.results[0].name) //n precisa de return
        renderizarPersonagens(data)
    })
    .catch((err)=>console.log(err))
})

function renderizarPersonagens(items){
    const container = document.getElementById('personagem-container')
    items.results.forEach((item, index)=>{
        const divPersona = document.createElement('div')
        divPersona.innerHTML = `
            <div class='personagem-caixa'>
                <img src='./image/perso${index}.png'>
                <div>
                    <h3>
                        ${item.name}
                    </h3>
                </div>
            </div>
        `;
        divPersona.classList.add('personagem')
        container.appendChild(divPersona)
    })
}