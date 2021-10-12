<?php

$datos = $_POST['text'];

$arch = fopen("comentarios.txt", "a");
fputs($arch, $datos);
fputs($arch, "\n");
fputs($arch, "\n");
fputs($arch, "\n");
fclose($arch);


echo "enviado";


?>