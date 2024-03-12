$(document).ready(function(){

 



    //1-------------------
    //A , B , F
    $("#menu-principal>label").on({
        click: function(){
            
            if($("#menu-toggle").css("display") === "none"){
                $("#menu-toggle").slideDown("slow");
                $("#menu-principal>label>span").animate({"color": "#e9a140"},1000)
            }else{
                $("#menu-toggle").slideUp("slow");
                $("#menu-principal>label>span").animate({"color": "white"},1000)
                $("#menu-principal>label>span").removeAttr("style")
                $("#menu-toggle>li>ul").removeAttr("style")
                $("#menu-toggle>li>a").removeAttr("style")
                $("#menu-toggle>li>a>span").removeAttr("style")
            }


           
        },
        
    })





    //C , D , E

    $("#menu-toggle>li").has("ul").on({
        click: function(){
        let ul = $(this).children('ul')
        let spanmenu = $(this).children('a')
        let angular = $(this).children("a").children("span:nth-child(2)")

          if(ul.css("display") === "none"){
            
            spanmenu.children("span").animate({"color": "#e9a140"},1000)
            ul.slideDown()
            angular.rotate({
                angle: 0,
                animateTo: -90
            })
 
          }else{
            $("#menu-toggle>li>ul").slideUp()
            spanmenu.children("span").animate({"color": "white"},1000)
            angular.rotate({
                angle: -90,
                animateTo: 0
            })
          }
        }
    })

    //G Y H
    $(window).on({
        scroll: function(){
            if($("#menu-toggle").css("display") != "none"){
                $("#menu-toggle").slideUp("slow");
                $("#menu-principal>label>span").animate({"color": "white"},1000)
            }
        },

        resize: function(){
            $("#menu-toggle").removeAttr("style")
            $("#menu-principal>label>span").removeAttr("style")
            $("#menu-toggle>li>ul").removeAttr("style")

            
        }
    })

    //2------
    $(".item-sec input").on({
        click: function(){
            $("#cartel").show();
        }
    })
    



       //4-------------------------
       $("#cookies").css({"display": "flex"}) //A
       //B
       $("#cookies>span").on({
           click: function(){
               $("#cookies").fadeOut("slow");
           }
       })


       //5-----------
       //A
       $("#registro input").blur(function(){
        if($(this).val().trim() === ""){
            $(this).next(".error-registro").css({"visibility": "visible"})
        }
        //B
        $("input").focus(function(){
            $(this).next(".error-registro").css({"visibility": "hidden"})
        })
       })
})

