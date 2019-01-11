<?php 
    header("Content-type: text/html; charset=utf-8");
    $val = $_POST["value"];
    $data = "";
    if (strcmp($val, "signin") == 0){
        $data = file_get_contents('http://searchingsystem.ru/html/signin.html', true);
    } elseif (strcmp($val, "signup") == 0){
        $data = file_get_contents('http://searchingsystem.ru/html/signup.html', true);
    } elseif (strcmp($val, "main") == 0){
        $data = file_get_contents('http://searchingsystem.ru/html/main.html', true);
    } elseif (strcmp($val, "info") == 0){
        $data = file_get_contents('http://searchingsystem.ru/html/info.html', true);
    }
    echo $data;
?>