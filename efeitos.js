const mascara = document.getElementById("mascara");
const pin = document.getElementById("pin");
const not = document.getElementById("exibirnoticias");

function mostrarAdicionarNoticias(){
    let botao = document.getElementById("myBtn");
    botao.addEventListener("click", (event) => {
        event.preventDefault()
        mascara.style.display = "block"
        formcont.style.display = "block"
    } )
}

function fecharAdicionarNoticias(){
    let botao = document.getElementById("botao-fechar");
    botao.addEventListener("click", (event) => {
        event.preventDefault()
        mascara.style.display = "none"
    } )
}


function verificaPin(){
    let verif = false;
    if(pin.value == '123'){
        verif = true;
    }

    return verif;
}

function fecharAdicionarNoticiasAdd(){
    mascara.style.display = "none"
    formcont.style.display = "none"
}

function mostrarDepoisPin(){
    let clicar = document.getElementById("clique");
    clicar.addEventListener("click", (event)=>{
        event.preventDefault()
        if(verificaPin()){
            myBtn.style.display = "block"
            pinacesso.style.display = "none"
            exibirnoticias.style.display = "block"
        }
        listarNoticias()
    })
}

function refreshPagina(){
    let botao = document.getElementById("botao-add");
    botao.addEventListener("click", (event) => {
        event.preventDefault()
        location.reload();
    })
}


function enviarNoticias(){
    let botao = document.getElementById("botao-add");
    botao.addEventListener("click", (event) => {
        event.preventDefault()
        formcont.style.display = "block"
        mascara.style.display = "block"
        let imgUrl = document.getElementById("link-imagem").value
        let title = document.getElementById("titulo-not").value
        let description = document.getElementById("descricao").value
        let category = document.getElementById("tema").value
        let url = document.getElementById("link-noticia").value
        adicionarNoticiaAPI({imgUrl, title, description, category, url}).then(()=>{
            fecharAdicionarNoticiasAdd()
            ultimaNoticia();
        })
    })
    
}

function ultimaNoticia(){
    listarNoticiaAPI().then((noticias)=>{
        for(let i = noticias.length - 1; i > noticias.length - 2; i++){

            let categoria = document.createElement("h1");
            categoria.textContent = noticias[i].category;
            not.appendChild(categoria)

            let urlImagem = document.createElement("h2");
            urlImagem.textContent = noticias[i].imgUrl;
            not.appendChild(urlImagem)
    
    
            let titulo = document.createElement("h2");
            titulo.textContent = noticias[i].title;
            not.appendChild(titulo)
    
            let descricao = document.createElement("h2");
            descricao.textContent = noticias[i].description;
            not.appendChild(descricao)
    
            let urlT = document.createElement("h2");
            urlT.textContent = noticias[i].url;
            not.appendChild(urlT)
    
        }
        })
}

function listarNoticias(){
    listarNoticiaAPI().then((noticias)=>{
    for(let i = 0; i < noticias.length; i++){
        

        
        let categoria = document.createElement("h1");
        categoria.textContent = noticias[i].category;
        not.appendChild(categoria)


        let urlImagem = document.createElement("h2");
        urlImagem.textContent = noticias[i].imgUrl;
        not.appendChild(urlImagem)


        let titulo = document.createElement("h2");
        titulo.textContent = noticias[i].title;
        not.appendChild(titulo)

        let descricao = document.createElement("h2");
        descricao.textContent = noticias[i].description;
        not.appendChild(descricao)

        let urlT = document.createElement("h2");
        urlT.textContent = noticias[i].url;
        not.appendChild(urlT)

    }
    })
}
mostrarAdicionarNoticias();
fecharAdicionarNoticias();
mostrarDepoisPin();
enviarNoticias();  