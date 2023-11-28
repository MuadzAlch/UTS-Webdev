<!DOCTYPE html>
<html>
<head>
<title>Contoh Skrip PHP Sederhana</title>
</head>
<body>

<?php
    $pesan = "Selamat datang! Ini adalah contoh skrip PHP sederhana.";

    echo "<h1>$pesan</h1>";
    $x=5;
    $y=6;
    $z=$x+$y;

    echo "<h1>jika nilai x=$x dan y=$y maka nilai z=$z</h1>";

    echo date('I,d-m-y');
    echo "<br/>";
    echo date ('d/M/y');
    echo "<br/>";
    echo date('D-M/Y');

    echo date('H:i:s a');
    echo "<br/>";
    echo date('l, d-m-Y  h:i:s a');

    
?>




</body>
</html>
