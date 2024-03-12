$(document).ready(function () {

    //Delcaro variables para que sea mas facil manejarlos individualmenente
    let clickadoPago = "div#contenido>footer>div#desplegables>div#pagos>img#flechapago"
    let clickadoContacto = "div#contenido>footer>div#desplegables>div#contacto>img#flechacontacto"
    let clickadoFiltros = "#btnFiltrar";
    let clickadoCerrarFiltros = "div#contenido>main>section>div#filtros>div:nth-child(1)>img";
    let filtrosSelector = "div#contenido>main>section>div#filtros"

    let clickadoMenu = "div#contenido>header#cabecera>nav#cabecera-principal>img:nth-child(1)"
    let menuDesplegable = "#menu"
    let clickadoCerrarMenu = "div#menu>header#cabeceramenu>nav#cabecera-principalmenu>div#cerrar>img"
    let lupaBuscador = "div#contenido>header#cabecera>nav#buscador>img#lupa"

    let avisoCookies = "div#contenido>main>div#avisocookies"
    let aceptarCookies = "div#contenido>main>div#avisocookies>div>button:nth-child(1)"



    //Redirecciones para los clicks en imagenes
    $("#iniciar-sesion").on({
        click: function () {
            window.location.href = "./main.html";
        }
    })

    $("#crear-cuenta").on({
        click: function () {
            window.location.href = "./crear-cuenta.html";
        }
    })

    
    $("#crear-cuenta2").on({
        click: function () {
            window.location.href = "./main.html";
        }
    })

    
    $(".mostrarcamisetas").on({
        click: function () {
            window.location.href = "./compra-camisetas.html";
        }
    })


    $("#tramitarpedido").on({
        click: function () {
            window.location.href = "./main.html";
        }
    })
    

    $("#colecciondragonball").on({
        click: function () {
            window.location.href = "./camisetas.html";
        }
    })

    $("#btnañadircesta").on({
        click: function () {
            window.location.href = "./cesta.html";
        }
    })

    $(".camisetasclick").on({
        click: function () {
            window.location.href = "./compra-camisetas.html";
        }
    })


    //Para el menu 
    $(clickadoMenu).on({
        click: function () {
            $(menuDesplegable).slideDown("slow");
            $(lupaBuscador).css("display", "none")
        }
    })

    $(clickadoCerrarMenu).on({
        click: function () {
            $(menuDesplegable).slideUp("slow");
            $(lupaBuscador).css("display", "")
        }
    })

  

    //Para el aviso de cookies
    $(aceptarCookies).on({
        click: function () {
            $(avisoCookies).hide();
        }
    })


    //Para el desplegable de metodos de pago
    $(clickadoPago).on({
        click: function () {

            $("#metodospagos").fadeOut();

            if ($("#metodospagos").css("display") === "none") {
                $("#metodospagos").fadeIn();
                $(clickadoPago).css({ transform: 'rotate(180deg)', transition: 'transform 0.5s ease' });
            } else {
                $(clickadoPago).css({ transform: 'rotate(0deg)', transition: 'transform 0.5s ease' });
            }
        }


    });

    //Para el desplegable de contacto
    $(clickadoContacto).on({
        click: function () {

            $("#formulariocontacto").fadeOut();

            if ($("#formulariocontacto").css("display") === "none") {
                $("#formulariocontacto").fadeIn();
                $(clickadoContacto).css({ transform: 'rotate(180deg)', transition: 'transform 0.5s ease' });
            } else {
                $(clickadoContacto).css({ transform: 'rotate(0deg)', transition: 'transform 0.5s ease' });
            }
        }


    });

    //Para el desplegable de filtros
    $(clickadoFiltros).on({
        click: function () {
            $(filtrosSelector).fadeIn()
        }
    })

    $(clickadoCerrarFiltros).on({
        click: function () {
            $(filtrosSelector).fadeOut()
        }
    })


    /*Cuando hago scroll o cuando se hace resize se cierra el menu*/ 

    $(window).on({
        scroll: function(){
            if($(menuDesplegable).css("display") != "none"){
                $(menuDesplegable).slideUp("slow");
                /*$("#menu-principal>label>span").animate({"color": "white"},1000)*/
            }
        },

        resize: function(){
            $(menuDesplegable).slideUp("slow");
        }
    })

    $(window).on("scroll", function(){

        if($(this).scrollTop()>50){
            $("#go-up").show()
        
            
        }else{
            $("#go-up").fadeOut(500)
          
        }
    
    })

    //Animacion para cuando clicke en la flechita para subir hacia arriba
    $(document).ready(function(){
        $("#go-up").click(function(){
            $("html").animate({
                scrollTop:0
            },500)
        })
    })

    $(document).ready(function() {
        $("input").focusin(function() {
            $(this).next(".errores").hide(); // Esconde el error
            $(this).css({"border": "1px solid black"}); // Restaura el borde a su estado inicial
        });
    
        $("input").focusout(function() {
            if ($(this).val().trim().length === 0) {
                $(this).next(".errores").show(); // Muestra el error
                $(this).css({"border": "1px solid red"}); // Cambia el borde solo en el input que falla
            }
        });
    });
    
    
    

    //Oculto todo al principio
    $(menuDesplegable).hide();
    $(filtrosSelector).hide();
    $("#metodospagos").hide();
    $("#formulariocontacto").hide();
   

});
