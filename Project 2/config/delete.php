<?php

require_once 'koneksi.php';

$id = $_POST['id'];

try{

$sql = 'DELETE FROM users WHERE id = ?';
$qonnect = $database_connection->prepare($sql);
$qonnect->execute([$id]);
echo "Data deleted successfully!";

}catch (PDOException $err){ 
    die("Error deleting data: ". $err->getMessage());
}
?>