<?php
require_once 'koneksi.php';

$nama_depan = $_POST['ndepan'];
$nama_belakang = $_POST['nbelakang'];
$email = $_POST['mail'];
$password = $_POST['pwd'];
$photo_name = $_FILES['filePhoto']['name'];
$photo_tmp = $_FILES['filePhoto']['tmp_name'];

if (!empty($_POST['id'])) {
    try {
        move_uploaded_file($photo_tmp, '../photo/'. $photo_name);
        $sql = 'UPDATE `users` SET `Nama_depan`=?, `Nama_belakang` = ?, `email` =?, `password` = ?, `photo`=? WHERE ID = ?';
        $qonnect = $database_connection->prepare($sql);
        $qonnect->execute([$nama_depan, $nama_belakang, $email, sha1($password), 'photo/'. $photo_name, $_POST['id']]);

        echo "Data updated";
    } catch (PDOException $err) {
        die("Failed updating".$err->getMessage());
    }
} else {
   try{
    move_uploaded_file($photo_tmp, '../photo/'. $photo_name);
    $sql = 'INSERT INTO `users` (`Nama_depan`,`Nama_belakang`,`email`,`password`,`photo`) VALUES (?,?,?,?,?)'; 
    $qonnect = $database_connection->prepare($sql);
    $qonnect->execute([$nama_depan, $nama_belakang, $email, sha1($password), 'photo/'. $photo_name]);
    echo "Data Inserted";   
}  catch (PDOException $err) {
    die("Failed inserting".$err->getMessage());
}
}