$("button").click(function (){
    var age= $(".choiceOne").val();
    var power=$(".choiceTwo").val();
    if (age<21 && power==="superpower") { 
        $("h1").hide();
        $(".kidflash").show();
        $("h2").hide();
        $("button").hide();
        $("body").css("background","yellow");
        $(".imgOne").hide();
        $(".imgTwo").hide();
        $("input").hide();
    }
    
    else if (age<21 && power==="human strength"){
        $(".robin").show();
        $(".imgOne").hide();
        $(".imgTwo").hide();
        $("input").hide();
        $("h2").hide();
        $("button").hide();
        $("h1").hide();
        $("body").css("background","red");
    }
    
    else if (age>21 && power==="superpower"){
        $(".aqualad").show();
        $(".imgOne").hide();
        $(".imgTwo").hide();
        $("input").hide();
        $("h2").hide();
        $("button").hide();
        $("h1").hide();
        $("body").css("background","#34dfef");
    }
    
    else if (age>21 && power==="human strength"){
        $(".artemis").show();
        $(".imgOne").hide();
        $(".imgTwo").hide();
        $("input").hide();
        $("h2").hide();
        $("button").hide();
        $("h1").hide();
        $("body").css("background","#2ad542");
    }
    
    else{}
});