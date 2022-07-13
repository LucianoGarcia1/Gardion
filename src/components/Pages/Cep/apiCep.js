const apiCep = ()=>{
    const input = document.querySelector('.cep');
    const rua = document.querySelector('.rua');
    const bairro = document.querySelector('.bairro');
    const localidade = document.querySelector('.localidade');
    const requestInfo = async(cep)=>{
        const url = `https://brasilapi.com.br/api/cep/v1/${cep}`;

        const requireCep = await fetch(url, {})
        .then(response => response.json())
        .then((data) =>{
            rua.innerText = data.street;
            bairro.innerText = data.neighborhood;
            localidade.innerText = data.city + '/' + data.state;
        })
    }
    requestInfo(input.value);
}

export default apiCep;