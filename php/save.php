header('content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://piotrgrudzien.github.io');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
echo $_POST["time"];