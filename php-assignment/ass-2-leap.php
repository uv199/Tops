<!-- Write a PHP program to check Leap years between 1901 to 2016 Using nested if.  -->

<?php
function isLeapYear($year)
{
    if ($year % 4 === 0) {
        if ($year % 100 === 0) {
            if ($year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// echo 1908 % 4;
echo "Leap years between 1901 and 2016 are:<br>";
for ($year = 1901; $year <= 2016; $year++) {
    if (isLeapYear($year)) {
        echo $year . "<br>";
    }
}
