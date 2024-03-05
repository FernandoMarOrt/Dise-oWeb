$(document).ready(function() {




    $(".errores").hide(); //Escondo los errores a lo primero
    

    /*1-Cuando todos los campos requeridos pierdan el foco, se debe comprobar si la longitud del dicho campo es 0. En caso afirmativo, 
    debe aparecer justo debajo del campo, sin que se mueva  nada de la interfaz, un mensaje en rojo indicando este error. 
    Cuando aparezca un nuevo error no se deben borrar los anteriores. Cuando la condición de error no se cumpla, se debe eliminar dicho mensaje.*/

    $("input, textarea").focusin(function() { //Cuando tiene el foco en el input o textarea
        $(this).siblings(".errores").hide() //Escondo el error
    });


    $("input, textarea").focusout(function() {
        if ($(this).val().trim().length === 0) { //Si esta vacio es decir longitud cero
            
            $(this).siblings(".errores").show() //Aparece error
        }
    });

    
    $("#btnError").click(function() {
        
        $('input, textarea').each(function() {
            
            if ($(this).val().trim().length === 0) { //Si esta vacio es decir longitud cero

                $(this).siblings(".errores").show() //Aparece error

            } else {
                $(this).siblings(".errores").hide() //Escondo el error
            }
        });
    });

    

    /*2-El formulario debe contener un textarea. El textarea del formulario debe tener una limitación de 100 caracteres. 
    Haz que cada vez que se inserte un nuevo carácter, se informe al usuario del número de caracteres restantes: 
    “Dispone de 32 caracteres” o bien un mensaje del tipo "Ha escrito 32 caracteres de 100".*/ 
    $("textarea").on("input", function () {
        let caracterTexto = $(this).val().length;
        let caracterMax = $(this).attr("maxlength");
        $("#ncaracteres").text( "Has escrito " + caracterTexto + " caracteres de " + caracterMax);
    });


    /*4-El Plugin jQuery DatePicker puede ser interesante ya que hay navegadores que no implementan de forma nativa mostrar un calendario en un campo de tipo fecha. 
    Investiga su uso y funcionamiento. Pruébalo en tu formulario.*/
    $( function() { $( "#fechas" ).datepicker();}); //Inicializo input de fechas 


});
