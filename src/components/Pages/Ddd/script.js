const apiDiscagem = ()=>{
    const input = document.querySelector('.ddd');
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const createElemento = (tag, conteudo)=>{
        const elemento = document.createElement(tag);
        elemento.innerText = conteudo;
        return elemento;
    }
    
    const dados = async(ddd)=>{
        const url = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;

        const requireFetch = await fetch(url,{})
        .then(response => response.json())
        .then((data)=>{

            const city = data.cities;
            city.forEach(e => {
                const h3Tag = createElemento('h3', e);
                content.appendChild(h3Tag);
            });
        })
    }
    dados(input.value);
}
export default apiDiscagem;