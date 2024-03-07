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
acumulación de efectos. Haz esto también al hacer scroll en el documento
    */
    $('#hamburger').on({
        click: function () {
            if ($('.line-ham').css('background-color') === 'rgb(0, 0, 0)') {
                $('span:nth-child(2)').animate({ 'width': '1.8rem' })
                $('.line-ham').css({ 'background-color': 'pink' })
                $('#menu-toggle').slideToggle('slow')

            } else if ($('.line-ham').css('background-color') === 'rgb(255, 192, 203)') {
                $('#menu-toggle>li>ul').css('display', 'none')
                $('span:nth-child(2)').animate({ 'width': '1.37rem' })
                $('.line-ham').css('background-color', 'black')
                $('#menu-toggle').slideToggle('slow')

            }

        }
    })
    $(window).on('scroll', function () {
        if ($('#menu-toggle').css('display') != 'none') {
            $('#menu-toggle').fadeOut(200)
            $('span:nth-child(2)').animate({ 'width': '1.37rem' })
            $('.line-ham').css('background-color', 'black')
        }
    })
    /*e) (1punto) Al hacer clic sobre la opción del menú “Alfombras Vinílicas”, se tiene que 
desplegar el submenú asociado con un efecto de desplazamiento desde la 
izquierda. Además, el icono + debe transformarse en el icono -. Al volver a hacer 
clic sobre el icono -, se debe realizar el efecto contrario y el - cambiarse por un +. */
    $('#menu-toggle>li').has('ul').on('click', function () {
        var ulElement = $(this).children('ul');
        var spanElement = $(this).children('span');

        // Si el UL actualmente está abierto
        if (ulElement.css('display') === 'none') {
            // Cierra el UL actual y cambia el texto del span
            $('#menu-toggle>li>ul').slideUp('slow');


            // Abre el nuevo UL y cambia el texto del span
            ulElement.slideDown('slow');
            spanElement.text('-');
        } else {
            // Cierra el UL y cambia el texto del span
            ulElement.slideUp('slow');
            spanElement.text('+');
        }
    });
/**f) (0,5puntos) Al redimensionar la ventana se tiene que borrar todo el código 
insertado en tiempo de ejecución asociado al menú para evitar fallos. Utiliza para 
ello el método removeAttr. */






/**(1,5 puntos) BARRA SOCIAL y CHAT
a) (0,25 puntos) Al cargar la página, la barra social aparece en el lateral derecho con 
un efecto de cambio de opacidad. */
   
    $('#chat').show(2000)
    
    /**b) (0,25 puntos) Al cargar la página, la pestaña del chat aparece en la parte inferior 
izquierda con un efecto de cambio de opacidad */
    $('#barra-social').show(2000)

    /**c) (0,5 puntos) Al hacer clic sobre la pestaña del chat debe aparecer la ventana del 
chat completa con un efecto de persiana deslizante hacia arriba. 
d) (0,5 puntos) Al hacer clic sobre la X de la cabecera de la ventana de chat, debe 
ocultarse el chat con un efecto de persiana deslizante hacia abajo. */
    $('#header-chat1').on({
        click: function () {
            $('#header-chat1').hide()
            $('#header-chat2').slideDown('slow')
            $('#window-chat').slideDown('slow')

            $('#header-chat2').children('span').click(function () {
                $('#header-chat2').slideUp()
                $('#window-chat').slideUp()
                $('#header-chat1').fadeIn('slow')
            })
        }

    })

/**(1 punto) BOTÓN DE COMPRA
a) (0,5 puntos) Al posicionar el ratón sobre cualquier artículo que contenga un 
producto, se debe mostrar en flex, el botón de compra.
b) (0,5 puntos) Cuando el ratón deja de estar sobre dicho artículo, el botón de 
compra desaparece con un efecto deslizante hacia arriba. */
    $('.producto').on({
        mouseenter: function () {
            let compra = $(this).children('a');
            compra.show(1000)
        },
        mouseleave: function () {
            let compra = $(this).children('a');
            compra.hide('slow')
        }
    })
})
/**4) (1,5 puntos) SLIDER
a) (0,5 puntos) Utiliza tu slider personalizado para insertarlo en la web justo debajo 
de la cabecera con las imágenes que puedes encontrar en la carpeta de recursos 
del examen.
b) (0,5 puntos) El slider debe reproducirse a una velocidad apropiada que permita ver 
las diferentes fotografías y debe detenerse al posicionar el ratón sobre éste.
c) (0,5 puntos) Deben aparecer las miniaturas de cada imagen en la parte inferior. Al 
posicionar el ratón sobre una miniatura se debe mostrar dicha imagen en la parte 
superior y resaltar el borde de dicha imagen en miniatura. */




/** (1,5 puntos) FLECHA y CABECERA
a) (0,5 puntos) Al hacer un poco de scroll sobre la página aparecerá la flecha “go-up” 
en la parte inferior derecha con un efecto de cambio de opacidad. Controla la 
acumulación de efectos.
b) (0,5 puntos) Además, al hacer scroll, la cabecera quedará en una posición fija en 
la parte superior con algo de opacidad. Controla la acumulación de efectos.
c) (0,5 puntos) Al hacer clic sobre la flecha, nos posicionamos al principio de la 
página con un efecto de animación. La cabecera debe recuperar su estado inicial y 
la flecha debe desaparecer con un efecto de cambio de opacidad.*/






/** (1,5 puntos) FLECHA y CABECERA
a) (0,5 puntos) Al hacer un poco de scroll sobre la página aparecerá la flecha “go-up” 
en la parte inferior derecha con un efecto de cambio de opacidad. Controla la 
acumulación de efectos.
b) (0,5 puntos) Además, al hacer scroll, la cabecera quedará en una posición fija en 
la parte superior con algo de opacidad. Controla la acumulación de efectos.
c) (0,5 puntos) Al hacer clic sobre la flecha, nos posicionamos al principio de la 
página con un efecto de animación. La cabecera debe recuperar su estado inicial y 
la flecha debe desaparecer con un efecto de cambio de opacidad.*/