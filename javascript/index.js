function expandirImagen(gif){
    let popup = document.createElement('div');
    popup.classList.add('popup');
    let body = document.querySelector('body');
    let imagen = document.createElement('img');
    let botonCerrar = document.createElement('button');
    botonCerrar.classList.add('icon');
    botonCerrar.classList.add('svg-hover');
    botonCerrar.classList.add('boton-cerrar-apliacion');
    let imagenCerrar = document.createElement('img');
    imagenCerrar.src = "./assets/close.svg"
    imagenCerrar.classList.add('iconClose')
    botonCerrar.appendChild(imagenCerrar);
    botonCerrar.addEventListener('click', closePopup);
    popup.appendChild(botonCerrar);
    imagen.src = gif.images.original.url
    imagen.classList.add('gifAmpliado')
    let botonesBox= document.createElement('div');
    // boton favs
    let buttonFav = document.createElement('button');
    let imgBtnFav = document.createElement('img');
    buttonFav.appendChild(imgBtnFav);
    imgBtnFav.src = "./assets/icon-fav-normal.svg";
    imgBtnFav.alt= "icono favoritos"
    buttonFav.classList.add("button-popup")
    //boton download
    let buttondownload = document.createElement('button');
    let imgBtndownload = document.createElement('img');
    buttondownload.appendChild(imgBtndownload);
    imgBtndownload.src = "./assets/icon-download-normal.svg";
    imgBtndownload.alt= "icono descarga"
    buttondownload.classList.add("button-popup")
    botonesBox.append(buttonFav, buttondownload);
    botonesBox.classList.add("botonesBox")
    // datos de usuario y titulo
    let user = document.createElement('p'); // muestra el user (dato sacado de json)
    let titulo = document.createElement('h5'); // muenstra el tittle del gif
    user.style.color= "black";
    titulo.style.color = "black";
    if(gif.user !== undefined){
        user.textContent = gif.user.display_name;
    }else{
        user.textContent = 'Anonymous';
    }
    titulo.textContent = gif.title;
    let datos = document.createElement('div')
    datos.classList.add("datospopup")
    datos.append(user,titulo)
    let datosGral = document.createElement('div')
    datosGral.append(datos, botonesBox)
    datosGral.classList.add("datosGralPopup")
    popup.append(imagen, datosGral);
    body.appendChild(popup);
    // AGREGO FUNCION A LOS BOTONES
    buttondownload.addEventListener("click", ()=>{
        downloadEvent(gif)
    })
    buttonFav.addEventListener("click", ()=>{
        imgBtnFav.src = "./assets/icon-fav-active.svg";
        arrayFav.push(gif);
        // se sube a favoritos con json stringify para que se gusrade con los datos. Si es set item es para subirlo
        window.localStorage.setItem("favoritos", JSON.stringify(arrayFav));
        guardarFavoritos(gif);
    })
}
const closePopup = () =>{
    const popup = document.querySelector('.popup');
    popup.parentElement.
    removeChild(popup);
}


