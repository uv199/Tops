<?php
function printPattern()
{
    $rows = 5;
    $columns = 5;

    for ($i = 1; $i <= $rows; $i++) {
        if ($i == 1 || $i == $rows) {
            for ($j = 1; $j <= $columns; $j++) {
                echo "*";
            }
        } else echo "*";

        echo "<br>";
    }
}

printPattern();
