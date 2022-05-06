<?php
if($_SERVER["QUERY_STRING"]!=""){
$param = "?".$_SERVER["QUERY_STRING"];
}else{$param = "";
}$url = "./main/main.php".$param;
header( "Location: $url" );
?>