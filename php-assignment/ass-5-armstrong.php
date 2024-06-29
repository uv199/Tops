<?php
function isArmstrong($number)
{
    $sum = 0;
    $temp = $number;
    $digits = strlen((string)$number);
    echo "test : $digits---";
    echo gettype($digits);
    while ($temp != 0) {
        $remainder = $temp % 10;
        $sum += pow($remainder, $digits);
        $temp = (int)($temp / 10);
    }

    return ($sum == $number);
}

$number = 153;

if (isArmstrong($number)) {
    echo "$number is an armstrong no.";
} else {
    echo "$number is not an armstrong no.";
}
