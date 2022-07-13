const apiFerias = async()=>{
    const content = document.querySelector('.content');

    content.innerHTML = '';

    const createElement = (tag, conteudo, classe) =>{
        const elemento = document.createElement(tag);
        elemento.innerText = conteudo;
        elemento.classList.add(classe);
        return elemento;
    }
    const createDiv = (tag, conteudo, subconteudo, classe) =>{
        const elemento = document.createElement(tag);
        elemento.appendChild(conteudo);
        elemento.appendChild(subconteudo);
        elemento.classList.add(classe);
        return elemento;
    }

    const anoAtual = new Date().getFullYear();
    const url = `https://brasilapi.com.br/api/feriados/v1/${anoAtual}`;

    const requestFetch = await fetch(url)
    .then(response => response.json())
    .then((data) =>{
        const list = data;
        list.forEach((e) =>{
            const ifFeriado = createElement('h3', e.name, 'ferias');
            const dateFerias = createElement('span', e.date, 'date');

            const div = createDiv('div', ifFeriado, dateFerias, 'box');
            content.appendChild(div);
        })
    })
    .catch(error => error);

}
export default apiFerias;