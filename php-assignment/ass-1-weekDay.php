<!--write a PHP program for find „Thursday‟ in week using switch Function.  -->

<?php
function findDayOfWeek($day) {
    switch ($day) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}

$day = date('w');

$dayOfWeek = findDayOfWeek($day);
echo "The day of the week for number $day is: $dayOfWeek";
?>
