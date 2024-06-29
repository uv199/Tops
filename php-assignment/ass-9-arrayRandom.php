<?php
$array = [10, 20, 30, 40, 50];

$randomKeys = array_rand($array, 2);

foreach ($randomKeys as $key) {
    echo "Random Value: $array[$key]<br>";
}
