
$(document).ready(function () {


    /*1) (3,5 puntos) MENÚ PRINCIPAL
 a) (0,5puntos) Al hacer clic sobre el icono de la hamburguesa se deberá mostrar el 
 menú principal del sitio con un efecto de persiana. Controla la acumulación de 
 efectos.
 b) (0,5puntos) La raya central del icono de hamburguesa del menú principal es más 
 corta que el resto. Al hacer clic sobre dicho icono esta raya crece hasta alcanzar el 
 mismo ancho que el resto de líneas con un efecto de animación. Controla la 
 acumulación de efectos.
 c) (0,5puntos) Además, al hacer clic sobre el icono de la hamburguesa ésta debe 
 cambiar de color. Utiliza un efecto de animación para que este cambio se realice de 
 forma progresiva. Controla la acumulación de efectos. No olvides que necesitas 
 utilizar un plugin para poder realizar este tipo de animación.
 d) (0,5 puntos) Al hacer de nuevo clic sobre el icono de hamburguesa todo debe 
 volver al estado inicial haciendo uso de efectos de animación. La hamburguesa 
 recuperará su color de manera progresiva, el tamaño de la línea central volverá a 
 ser más corta y el menú se ocultará con un efecto de persiana. Controla la 
 acumulación de efectos. Haz esto también al hacer scroll en el documento rgb(255, 192, 203)
     */


    $("#hamburger").on({
        click: function () {
            if ($(".line-ham").css("background-color") === "rgb(0, 0, 0)") {

                $(".line-ham").animate({ "background-color": "pink" }, "slow")
                $(".line-ham:nth-child(2)").animate({ "width": "1.8rem" })
                $("#menu-toggle").slideToggle("slow")


            } else if ($('.line-ham').css('background-color') === 'rgb(255, 192, 203)') {
                $("#menu-toggle>ul>li").css({ "display": "none" })
                $(".line-ham").animate({ "background-color": "black" }, "slow")
                $(".line-ham:nth-child(2)").animate({ "width": "1.37rem" })
                $("#menu-toggle").slideToggle()
            }

        }
    })


    $("#window").on({
        scroll: function () {
            if ($("#menu-toggle").css("display") != none) {
                $(".line-ham").animate({ "background-color": "black" }, "slow")
                $(".line-ham:nth-child(2)").animate({ "width": "1.37rem" })
            }
            $("#menu-toggle").fadeIn()
        }
    })




    /*e) (1punto) Al hacer clic sobre la opción del menú “Alfombras Vinílicas”, se tiene que 
desplegar el submenú asociado con un efecto de desplazamiento desde la 
izquierda. Además, el icono + debe transformarse en el icono -. Al volver a hacer 
clic sobre el icono -, se debe realizar el efecto contrario y el - cambiarse por un +. */
    $(document).ready(function () {
        $('#menu-toggle>li').has('ul').on('click', function () {
            if ($(this).children('ul').is(':visible')) {     // Si el UL actualmente está abierto
                $(this).children('ul').slideUp('slow');
                $(this).children('span').text('+');
            } else {
                $('#menu-toggle>li>ul').slideUp('slow');       // Cierra todos los UL 
                $(this).children('ul').css({ left: '-50vw', display: 'block' }).animate({ left: 0 }, 'slow');//efecto y abrir
                $(this).children('span').text('-'); //cambia los textos de los span
            }
        });
    });




    /**f) (0,5puntos) Al redimensionar la ventana se tiene que borrar todo el código 
    insertado en tiempo de ejecución asociado al menú para evitar fallos. Utiliza para 
    ello el método removeAttr. */

    $(window).resize(function () {
        $("#menu-toggle").removeAttr("style")
        $(".line-ham").removeAttr("style")
    })



    /**(1,5 puntos) BARRA SOCIAL y CHAT
    a) (0,25 puntos) Al cargar la página, la barra social aparece en el lateral derecho con 
    un efecto de cambio de opacidad. */

    $('#chat').fadeIn(2000)

    /**b) (0,25 puntos) Al cargar la página, la pestaña del chat aparece en la parte inferior 
izquierda con un efecto de cambio de opacidad */

    $('#barra-social').fadeIn(2000)

    /**c) (0,5 puntos) Al hacer clic sobre la pestaña del chat debe aparecer la ventana del 
chat completa con un efecto de persiana deslizante hacia arriba. 
d) (0,5 puntos) Al hacer clic sobre la X de la cabecera de la ventana de chat, debe 
ocultarse el chat con un efecto de persiana deslizante hacia abajo. */

    $("#header-chat1").on({
        click: function () {
            $("#header-chat1").hide()
            $("#header-chat2").slideDown()
            $("#window-chat").slideDown()
        }
    })

    $("#header-chat2").children("span").click(function () {
        $("#header-chat1").fadeIn("show")
        $("#header-chat2").slideUp()
        $("#window-chat").slideUp()
    })


    /**(1 punto) BOTÓN DE COMPRA
    a) (0,5 puntos) Al posicionar el ratón sobre cualquier artículo que contenga un 
    producto, se debe mostrar en flex, el botón de compra.
    b) (0,5 puntos) Cuando el ratón deja de estar sobre dicho artículo, el botón de 
    compra desaparece con un efecto deslizante hacia arriba. */

    $(".producto").on({
        mouseenter: function () {
            $(this).children("a").show()
        },
        mouseleave: function () {
            $(this).children("a").slideUp("slow")
        }
    })

    /** (1,5 puntos) FLECHA y CABECERA
    a) (0,5 puntos) Al hacer un poco de scroll sobre la página aparecerá la flecha “go-up” 
    en la parte inferior derecha con un efecto de cambio de opacidad. Controla la 
    acumulación de efectos.
    b) (0,5 puntos) Además, al hacer scroll, la cabecera quedará en una posición fija en 
    la parte superior con algo de opacidad. Controla la acumulación de efectos.
    c) (0,5 puntos) Al hacer clic sobre la flecha, nos posicionamos al principio de la 
    página con un efecto de animación. La cabecera debe recuperar su estado inicial y 
    la flecha debe desaparecer con un efecto de cambio de opacidad.*/


    $(window).on({
        scroll: function () {
            if ($(this).scrollTop() > 50) {
                $('#go-up').fadeIn(1000)
                $("#home-header").css({
                    "width": "100%",
                    "position": "fixed",
                    "opacity": "0.7",
                })
            } else if ($(this).scrollTop() === 0) {
                $('#go-up').hide("slow")
                $("#home-header").css({
                    "width": "",
                    "position": "",
                    "opacity": "",
                })
            }
        }
    })

    $("#go-up").on({
        click: function () {
            $("html").animate({
                scrollTop: 0,
            }, 500)
        }
    })


    /*(1 punto) FORMULARIO 
    a) (0,5puntos) En el formulario del chat, cuando un campo requerido pierda el foco se 
    debe comprobar si la longitud de dicho campo es 0. En caso afirmativo, debe 
    aparecer debajo de cada input, dentro de la etiqueta span, un mensaje en rojo 
    indicando este error. Cuando aparezca un nuevo error no se deben borrar los 
    anteriores. 
    b) (0,5puntos) El textarea del formulario tiene una limitación de 100 caracteres. Haz 
    que cada vez que se inserte un nuevo carácter, se informe al usuario del número 
    de caracteres restantes con un mensaje con el siguiente: “Dispone de 32 
    caracteres”. */




    $("input").blur(function () {
        if ($(this).val().trim() === "") {
            $(this).next(".error-chat").css({ "visibility": "visible" })
        }
    })


    $("input").focus(function () {

        $(this).next(".error-chat").css({ "visibility": "hidden" })

    })


    $("textarea").on({
        input: function () {
            let caracter = $(this).val().length
            let maximo = $(this).attr("maxlength")
            let total = maximo - caracter
            $("#info-caracteres").text(" Dispone de " + total)

        
        }
    })

}) 