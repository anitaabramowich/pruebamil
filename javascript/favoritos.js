// async function getSearch(q){
//     let apiKey = "fgVjJaN3I9MA9kWoGM9wIaowk7idDx5q";
//     let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=12&offset=${offset}`;
//     let respuesta = await fetch(url);
//     let resultado = await respuesta.json();
//     console.log(resultado);


// function agrandarImg(gif){
//     let cajaExpandir = document.createElement('div');
//     cajaExpandir.classList.add('caja-expandir');
//     let body = document.querySelector('body');
//     let imagen = document.createElement('img');
//     let botonCerrar = document.createElement('button');
//     botonCerrar.classList.add('icon');
//     botonCerrar.classList.add('svg-hover');
//     botonCerrar.classList.add('boton-cerrar-apliacion');
//     let imagenCerrar = document.createElement('img');
//     imagenCerrar.src = "imagenes/close.svg";
//     imagenCerrar.classList.add('iconClose');
//     botonCerrar.appendChild(imagenCerrar);
//     botonCerrar.addEventListener('click', closeCajaExpandir);
//     cajaExpandir.appendChild(botonCerrar);
//     imagen.src = gif.images.original.url;
//     imagen.classList.add('gifAmpliado');
//     let botonesCaja = document.createElement('div');
//     // boton favs
//     let buttonFav = document.createElement('button');
//     let imgBtnFav = document.createElement('img');
//     buttonFav.appendChild(imgBtnFav);
//     imgBtnFav.src = "imagenes/icon-fav.svg";
//     imgBtnFav.alt= "icono favoritos";
//     buttonFav.classList.add("button-popup")
//     //boton download
//     let buttondownload = document.createElement('button');
//     let imgBtndownload = document.createElement('img');
//     buttondownload.appendChild(imgBtndownload);
//     imgBtndownload.src = "imagenes/icon-download";
//     imgBtndownload.alt= "icono descarga";
//     buttondownload.classList.add("button-popup");
//     botonesCaja.append(buttonFav, buttondownload);
//     botonesCaja.classList.add("botonesCaja");
//     // datos de usuario y titulo
//     let user = document.createElement('p'); // muestra el user (dato sacado de json)
//     let titulo = document.createElement('h5'); // muenstra el tittle del gif
//     user.style.color= "black";
//     titulo.style.color = "black";
//     if(gif.user !== undefined){
//         user.textContent = gif.user.display_name;
//     }else{
//         user.textContent = 'Anonymous';
//     }
//     titulo.textContent = gif.title;
//     let datos = document.createElement('div');
//     datos.classList.add("datospopup");
//     datos.append(user,titulo);
//     let datosGral = document.createElement('div');
//     datosGral.append(datos, botonesBox);
//     datosGral.classList.add("datosGralPopup");
//     cajaExpandir.append(imagen, datosGral);
//     body.appendChild(cajaExpandir);
//     // AGREGO FUNCION A LOS BOTONES
//     buttondownload.addEventListener("click", ()=>{
//         downloadEvent(gif)
//     })
//     buttonFav.addEventListener("click", ()=>{
//         imgBtnFav.src = "imagenes/icon-fav-active";
//         arrayFav.push(gif);
//         // se sube a favoritos con json stringify para que se gusrade con los datos. Si es set item es para subirlo
//         window.localStorage.setItem("favoritos", JSON.stringify(arrayFav));
//         guardarFavoritos(gif);
//     })
// }
// const closeCajaExpandir = () =>{
//     const cajaExpandir = document.querySelector('.cajaExpandir');
//     cajaExpandir.parentElement.
//     removeChild(cajaExpandir)
// }
// }