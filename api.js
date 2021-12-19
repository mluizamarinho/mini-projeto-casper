async function adicionarNoticiaAPI(body){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let resposta =  await fetch("http://localhost:3000/news",{
        method:"POST",
        body:JSON.stringify(body),
        headers: headers
    })

    if(!resposta.ok){
        alert("Tente novamente!");
        return false;
    }

    console.log(resposta.json());
    return true;

}

async function listarNoticiaAPI(){
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let resposta =  await fetch("http://localhost:3000/news",{
        method:"GET",
        headers: headers
    })

    const resultado = await resposta.json();
    if(!resposta.ok){
        alert("Tente novamente!");
        return null;
    }
    return resultado;

}
