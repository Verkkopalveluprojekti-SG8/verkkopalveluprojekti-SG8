<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

// $uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
//$parameters = explode('/',$uri);
//$product_id = $parameters[1];


$uri_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri_segments = explode('/', $uri_path);

//print_r( $uri_segments); // for www.example.com/user/account you will get 'user'
$product_id = $uri_segments[3];

try {
  $db = openDb();
  selectRowAsJson($db,"select * from product where id = $product_id");
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}