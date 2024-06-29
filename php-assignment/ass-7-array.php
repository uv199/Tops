<?php

$indexedArray2 = [40, 50, 60];
$jsonString = '{"a": 10, "b": 20, "c": [30]}';

$arrayFromJson = json_decode($jsonString);

echo  $arrayFromJson->a . "<br>";
echo  $arrayFromJson->b . "<br>";
echo  $arrayFromJson->c[0] . "<br>";
