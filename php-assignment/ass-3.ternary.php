<!-- Write a PHP program to find the largest of three numbers using ternary Operator. -->

<?php
$num1 = 405;
$num2 = 78;
$num3 = 32;

$largest = ($num1 > $num2)
    ? (($num1 > $num3) ? $num1 : $num3)
    : (($num2 > $num3) ? $num2 : $num3);

echo "The largest number $largest";

?>