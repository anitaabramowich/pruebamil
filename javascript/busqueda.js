const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsEl = document.getElementById('results');
const vermas = document.getElementById('ver-mas');
const containerSugerencias = document.getElementById('container-sugerencias');
const contenedorTituloBusqueda = document.getElementById('contenedor-titulo-busqueda');
const contenedorTendencias = document.getElementById('contenedor-tendencias');
const iconSearch = document.getElementById('icon-search');
const iconClose = document.getElementById('icon-close');
const contenedorSugerenciasTrendings = document.getElementById("contenedor-sugerencias-trendings");
const botonVerMas = document.getElementById('boton-vermas');
const contenedorLineaDivisora = document.getElementById('contenedor-linea-divisora');
let offset = 0;
let q;


    async function getSearch(q){
        let apiKey = "fgVjJaN3I9MA9kWoGM9wIaowk7idDx5q";
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=12&offset=${offset}`;
        let respuesta = await fetch(url);
        let resultado = await respuesta.json();
        console.log(resultado);
        
        for(let index = 0; index < 12; index++){
            let img = document.createElement('img');
            img.src = resultado.data[index].images.downsized.url;
            resultsEl.appendChild(img);
            img.classList.add('gifresults');
            iconClose.addEventListener('click', ()=>{
                iconSearch.style.display = 'block';
                iconClose.style.display = 'none';
                resultsEl.removeChild(img);
            }); 
        }
        resultsEl.addEventListener('click', ()=>{
            let cajaExpandir = document.createElement('div');
            cajaExpandir.classList.add('caja-expandir');
            let body = document.querySelector('body');
            body.appendChild(cajaExpandir);
            // agrego boton cerrar
            let imagenCerrar = document.createElement('img');
            imagenCerrar.src = "imagenes/close.svg";
            imagenCerrar.classList.add('iconClose');
            imagenCerrar.addEventListener('click', ()=>{
                body.removeChild(cajaExpandir)});
            cajaExpandir.appendChild(imagenCerrar);
            // imagen gif ampliado
            let caja = document.createElement('div');
            caja.classList.add('caja-prueba')
            cajaExpandir.appendChild(caja)
            let botonesCaja = document.createElement('div');
            // boton favs
            let buttonFav = document.createElement('button');
            buttonFav.classList.add('boton-popup')
            let imgBtnFav = document.createElement('img');
            buttonFav.appendChild(imgBtnFav);
            imgBtnFav.src = "imagenes/icon-fav.svg";
            imgBtnFav.alt= "icono favoritos";
            buttonFav.classList.add("iconoFav-popup")
            //boton download
            let buttondownload = document.createElement('button');
            buttondownload.classList.add('boton-popup')
            let imgBtndownload = document.createElement('img');
            buttondownload.appendChild(imgBtndownload);
            imgBtndownload.src = "imagenes/icon-download.svg";
            imgBtndownload.alt= "icono descarga";
            buttondownload.classList.add("iconoDownload-popup");
            botonesCaja.append(buttonFav, buttondownload);
            botonesCaja.classList.add("botonesCaja");
            cajaExpandir.appendChild(botonesCaja);
            // datos de usuario y titulo
            let user = document.createElement('p'); // muestra el user (dato sacado de json)
            let titulo = document.createElement('h5'); // muenstra el tittle del gif
            user.style.color= "black";
            titulo.style.color = "black";
            user.textContent = "User";
            titulo.textContent = "Titulo GIFO";
            // if(gif.user !== undefined){
            //     user.textContent = gif.user.display_name;
            // }else{
            //     user.textContent = 'Anonymous';
            // }
            // titulo.textContent = gif.title;
            let datos = document.createElement('div');
            datos.classList.add("datospopup");
            datos.append(user,titulo);
            cajaExpandir.appendChild(datos)
            // let datosGral = document.createElement('div');
            // datosGral.append(datos, botonesBox);
            // datosGral.classList.add("datosGralPopup");
            // cajaExpandir.append(imagen, datosGral);

            // AGREGO FUNCION A LOS BOTONES
            // buttondownload.addEventListener("click", ()=>{
            //     downloadEvent(gif)
            // })
            // buttonFav.addEventListener("click", ()=>{
            //     imgBtnFav.src = "imagenes/icon-fav-active";
            //     arrayFav.push(gif);
            //     // se sube a favoritos con json stringify para que se gusrade con los datos. Si es set item es para subirlo
            //     window.localStorage.setItem("favoritos", JSON.stringify(arrayFav));
            //     guardarFavoritos(gif);
            // })
        })
    }
    
    // RESULTADOS ICONO BUSQUEDA
    iconSearch.addEventListener('click', ()=>{
            iconSearch.style.display = 'none';
            iconClose.style.display = 'block';
            q = searchInput.value;
            offset = 0;
            getSearch(q);
            contenedorTendencias.classList.toggle('contenedor-tendencias-busqueda');
            containerSugerencias.style.display = "none";
            const lineaDivisora = document.createElement('div');
            lineaDivisora.classList.add('linea-divisora');
            contenedorLineaDivisora.appendChild(lineaDivisora);
            const resultadoTitulo = document.createElement('h2');
            resultadoTitulo.textContent = q;
            resultadoTitulo.classList.add('titulo-busqueda');
            contenedorTituloBusqueda.appendChild(resultadoTitulo);
            const btnVerMas = document.createElement('button');
            btnVerMas.classList.add('vermas');
            btnVerMas.textContent = "ver mas";
            botonVerMas.appendChild(btnVerMas);
            
            btnVerMas.addEventListener('click', () =>{
            q = searchInput.value;
            offset += 12;
            getSearch(q);
        });
            iconClose.addEventListener('click', () =>{
            contenedorTituloBusqueda.removeChild(resultadoTitulo);
            botonVerMas.removeChild(btnVerMas);
            contenedorTendencias.classList.toggle('contenedor-tendencias-busqueda');
            contenedorLineaDivisora.removeChild(lineaDivisora);
        });
    });

        async function autocomplete(q) {
            let apiKey = "fgVjJaN3I9MA9kWoGM9wIaowk7idDx5q";
            let url2 = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apiKey}&q=${q}&limit=5&offset=${offset}`;
            let respuesta2 = await fetch(url2);
            const resultado2 = await respuesta2.json();
            
            
            for(let index = 0; index < 4; index++){
                let sugerencia = resultado2.data[index].name;
                let textoSugerencia = document.createElement('p');
                textoSugerencia.textContent = sugerencia;
                textoSugerencia.classList.add('textoSugerenciaStyle');
                containerSugerencias.appendChild(textoSugerencia); 
                searchInput.addEventListener('keyup', () => {
                containerSugerencias.removeChild(textoSugerencia);
            })

            textoSugerencia.addEventListener('click', () =>{
                q = searchInput.value;
                getSearch(q);
                iconSearch.style.display = 'none';
                iconClose.style.display = 'block';
                containerSugerencias.style.display = "none";
                contenedorTendencias.classList.toggle('contenedor-tendencias-busqueda');
                const lineaDivisora = document.createElement('div');
                lineaDivisora.classList.add('linea-divisora');
                contenedorLineaDivisora.appendChild(lineaDivisora);
                let resultadoTitulo = document.createElement('h2');
                resultadoTitulo.textContent = sugerencia;
                resultadoTitulo.classList.add('titulo-busqueda');
                contenedorTituloBusqueda.appendChild(resultadoTitulo);
                let btnVerMas = document.createElement('button');
                btnVerMas.classList.add('vermas');
                btnVerMas.textContent = "ver mas";
                botonVerMas.appendChild(btnVerMas);
            
                btnVerMas.addEventListener('click', () =>{
                q = searchInput.value;
                offset += 12;
                getSearch(q);
            });
                iconClose.addEventListener('click', () =>{
                contenedorTituloBusqueda.removeChild(resultadoTitulo);
                botonVerMas.removeChild(btnVerMas);
                contenedorTendencias.classList.toggle('contenedor-tendencias-busqueda');
                contenedorLineaDivisora.removeChild(lineaDivisora);
            });
        });
            } 
        }
        
    // CONTENEDOR SUGERENCIAS
    searchInput.addEventListener('keyup', () =>{
            containerSugerencias.style.display = 'block';
            q = searchInput.value 
            autocomplete(q);
        });




