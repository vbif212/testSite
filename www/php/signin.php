<?php 
    header("Content-type: text/html; charset=utf-8");
    $login = $_POST["login"];
    $pwd = $_POST["pwd"];

    $servername = "localhost";
    $username = "admin";
    $password = "";
    $dbname = "searchingsystem";
    $conn = new mysqli($servername, $username, $password, $dbname);
    $sqlLogin = "select * from users where (login=\"".$login."\" and password=\"".$pwd."\")";
    $resultLogin = $conn->query($sqlLogin);
    if ($resultLogin->num_rows === 0){
        echo "0";
    } else {
        $row = $resultLogin->fetch_row();
        $data = array("OK", $row[1]);
        echo json_encode($data);
    }
    $conn->close();
    exit();
?>