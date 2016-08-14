<?php
header('Content-type: text/plain');
header('Access-Control-Allow-Origin: https://piotrgrudzien.github.io');
$myfile = fopen("newfile.txt", "w");
fwrite($myfile, "Wrote something");
fclose($myfile);
echo $_GET["time"];
?>