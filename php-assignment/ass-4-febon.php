<?php
function printFibonacciSeries($limit)
{
    $num1 = 0;
    $num2 = 1;

    echo $num1 . ", " . $num2;

    while (true) {
        $nextNum = $num1 + $num2;
        if ($nextNum > $limit) break;
        echo ", " . $nextNum;
        $num1 = $num2;
        $num2 = $nextNum;
    }
}

$limit = 34;
echo "Fibonacci series :<br>";
printFibonacciSeries($limit);
