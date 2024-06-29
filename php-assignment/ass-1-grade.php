<!-- Write a PHP program to enter marks of five subjects Physics, Chemistry,Biology, Mathematics and Computer, calculate percentage and grade by if else -->

<?php

function calculateGrade($marks) {
    $totalMarks = array_sum($marks);
    $length = sizeof($marks) * 100;
    $percentage = ($totalMarks / $length) * 100;

    if ($percentage >= 90) {
        $grade = "A";
    } elseif ($percentage >= 80) {
        $grade = "B";
    } elseif ($percentage >= 70) {
        $grade = "C";
    } elseif ($percentage >= 60) {
        $grade = "D";
    } elseif ($percentage >= 40) {
        $grade = "E";
    } else {
        $grade = "F";
    }

    return array("percentage" => $percentage, "grade" => $grade);
}



$marks = array(
    "Physics" => 85,
    "Chemistry" => 78,
    "Biology" => 90,
    "Mathematics" => 95,
    "Computer" => 88
);

$result = calculateGrade($marks);

echo "Percentage: {$result['percentage']}%<br>";
echo "Grade: {$result['grade']}";
?>
