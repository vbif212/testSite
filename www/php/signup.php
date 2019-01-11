<?php 
    header("Content-type: text/html; charset=utf-8");
    $name = $_POST["name"];
    $email = $_POST["email"];
    $login = $_POST["login"];
    $pwd = $_POST["pwd"];

    $servername = "localhost";
    $username = "admin";
    $password = "";
    $dbname = "searchingsystem";
    $conn = new mysqli($servername, $username, $password, $dbname);
    $sqlEmail = "select * from users where email=\"".$email."\"";
    $resultEmail = $conn->query($sqlEmail);
    if ($resultEmail->num_rows > 0){
        echo "email";
    } else {
        $sqlLogin = "select * from users where login=\"".$login."\"";
        $resultLogin = $conn->query($sqlLogin);
        if ($resultLogin->num_rows > 0){
            echo "login";
        } else {
            $sqlInsert = "insert into users(name, email, login, password) values (\"".$name."\", \"".$email."\", \"".$login."\", \"".$pwd."\")";
            $conn->query($sqlInsert);
            echo "OK";
        }
    }
    $conn->close();
?>