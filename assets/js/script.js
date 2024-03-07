//Patrón Módulo mediante IIFE
let videos = (() => {
    //Funcion PRIVADA recibe la url + el id
    function recibe(url, id){
        var reproductor = document.getElementById(id);// getElementById es un metodo para obtener una refrencia dentro del html
        reproductor.setAttribute('src', url)
        //setAttribute sirve para cambiar o añadir atributos en el html
    }
    //funcion publica muestra lo que hay en la fp
    return function(url,id){
        recibe(url, id)
    }
})();

class Multimedia{// se crea la clase padre
    constructor(url){
        this._url = url;
    }

    get url(){ //
        return this._url;
    }

    setInicio(){
        return "Este método es para realizar un cambio en la URL del video"
    }
};

class Reproductor extends Multimedia{ // se crea la clase hijo y se extiende la del padre
    constructor(url, id){
        super(url);
        this._id = id;
    }

    get id(){
        return this._id
    }
    playMultimedia(){ // metodo que llama la funcion videos mete la url y el id
        return videos(this._url, this._id)
    }
    setInicio(puntoInicio){
        this._url = `${this._url}&start=${puntoInicio}`;
    }
}
// se crean instancias y se llama al metodo set inicio y con el playmultimerdia hace mostrar el video en el html
var playMusica = new Reproductor('https://www.youtube.com/embed/v04PQa_WpjU?si=lFdMt3PFWxoJESN1','musica');
playMusica.setInicio(40);
playMusica.playMultimedia();
var playpeliculas = new Reproductor('https://www.youtube.com/embed/C5BQBIUsp3Y?si=NEWmBT5w--iAaxF4','peliculas');
playpeliculas.setInicio(4);
playpeliculas.playMultimedia();
var playseries = new Reproductor('https://www.youtube.com/embed/NQoo5WA32lw?si=Fx-M_Cz24DwlXkK4','series');
playseries.setInicio(30);
playseries.playMultimedia();
