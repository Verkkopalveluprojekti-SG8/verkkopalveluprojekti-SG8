<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

//$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
//$parameters = explode('/',$uri);
//$category_id = 
//print_r($parameters);
//print_r($category_id);

$uri_path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri_segments = explode('/', $uri_path);

//print_r( $uri_segments); // for www.example.com/user/account you will get 'user'
$category_id = $uri_segments[3];

try {
  $db = openDb();
  $sql = "select * from category where id = $category_id";
  $query = $db->query($sql);
  $category = $query->fetch(PDO::FETCH_ASSOC);

  $sql = "select * from product where category_id = $category_id";
  $query = $db->query($sql);
  $products = $query->fetchAll(PDO::FETCH_ASSOC);

  header('HTTP/1.1 200 OK');
  echo json_encode(array(
    "category" => $category['name'],
    "products" => $products
  ));
}
catch (PDOException $pdoex) {
  returnError($pdoex);
}


?>;