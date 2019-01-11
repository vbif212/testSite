$(document).ready(function() {
    checkCookie();
    $.post("http://searchingsystem.ru/php/script.php",
            {
                value: "main"
            },
            function(data){
                $(".content").html(data);
            })
    
    $("#signin").click(function() {
        $('a').removeClass("active");
        $(this).addClass("active");
        $.post("http://searchingsystem.ru/php/script.php",
            {
                value: "signin"
            },
            function(data){
                $(".content").html(data);
            })
    })
    
    $("#signout").click(function() {
        document.getElementById('main').click()
        $.removeCookie("name");
        $("#signin").show();
        $("#signup").show();
        $("#signout").hide();
        $("#welcome").html("");
        $("#logout").html("");
    })
    
    $("#signup").click(function() {
        $('a').removeClass("active");
        $(this).addClass("active");
        $.post("http://searchingsystem.ru/php/script.php",
            {
                value: "signup"
            },
            function(data){
                $(".content").html(data);
            })
    })
    
    $("#main").click(function() {
        $('a').removeClass("active");
        $(this).addClass("active");
        $.post("http://searchingsystem.ru/php/script.php",
            {
                value: "main"
            },
            function(data){
                $(".content").html(data);
            })
    })
    
    $("#info").click(function() {
        $('a').removeClass("active");
        $(this).addClass("active");
        $.post("http://searchingsystem.ru/php/script.php",
            {
                value: "info"
            },
            function(data){
                $(".content").html(data);
            })
    })
    
    $(".navbar-brand").click(function() {
        $('a').removeClass("active");
        $('#main').addClass("active");
        $.post("http://searchingsystem.ru/php/script.php",
            {
                value: "main"
            },
            function(data){
                $(".content").html(data);
            })
    })
});

function signup() {
    $.post('http://searchingsystem.ru/php/signup.php', 
            $("#signupform").serialize(),
            function(data){
                if (data === "OK"){
                    $(".content").html("<div class=\"container\"><h1 style=\"color: forestgreen\">Регистрация прошла успешно.<br>Теперь можете авторизироваться</h1></div>");
                } else {
                    if (data === "email"){
                        $(".content").html("<div class=\"container\"><h1 style=\"color: crimson\">Пользователь с такой почтой уже существует</h1></div>");
                    }
                    if (data === "login"){
                        $(".content").html("<div class=\"container\"><h1 style=\"color: crimson\">Пользователь с таким логином уже существует</h1></div>");
                    }
                }
            })
}

function signin() {
    $.ajax({
        type: "POST",
        url: "http://searchingsystem.ru/php/signin.php",
        data: $("#signinform").serialize(),
        dataType: "json", // Set the data type so jQuery can parse it for you
        success: function (data) {
            $.cookie("name", data[1]);
            document.getElementById('main').click()
            checkCookie();
        }
    });
}

function checkCookie(){
    if ($.cookie("name")){
        $("#signin").hide();
        $("#signup").hide();
        $("#welcome").html("<a>Привет, " + $.cookie("name") + "!</a>");
        $("#signout").show();
    }
}