<?php 
$webname = "Plaza Sureño";
$uri = $_SERVER['REQUEST_URI'];    
include("getpath.php");
$dir = ucfirst(basename(getcwd()));


if(strlen($uri) > 1)
    echo $webname." ".$dir;
else
    echo $webname;
  
?>