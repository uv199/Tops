/*
1. make a function which take a number and , 
- if number is even then it will ptint "number is even",
- if odd the it will print "number is odd" and 
- if i pass 0 it will print "number is ZERO"
==>Example
- if i pass 10 it will print "Number is event..!"
- if i pass 10 it will print "Number is odd..!"
- if i pass 0 it will print "Number is ZERO..!"

2. make a function which, if i give a array with odd and even number it will remove all odd number and return a array with evnet number. 
node - return array must be in accending order
==>Example
 if i give [ 1,2,4,78,2,6] need [2,2,4,6,78] 
 - [2,4,78,2,6] => ans is wrong 
 - [1,2,2,78,6] => ans is wrong
 - [2,2,4,6,78] => correct ans


3. make a data structure for femily tree ( start from your father )
- Note : need mention this details in your data structure
    - name, age and accupation of your father
    - your siblings age and name (note : it can be more then one)
    - your family's vehicle,s name and number (note : it can be multiple)

==>Example


const myFamilyData = {
    fatherName:"abc",
    age:26,
    vehicleDetails: [
        {
            name:"xyz",
            number:"GJ-05-FG-5040"
        }
    ],
    child .....continue 
}

4. Made a function which a count how many time user given carector is repeting in string.
==>Example
let string = "hello world"
- if use give 'h' you need to reaturn 1 because h is only one time use in a given string
- if i give 'l' you need to return 3 because l is repeating 3 time in a string
- if i give 't' you need to reaturn "Charactor is not available in a string"


5. make a function who reverce a string (by use of for-loop)
==>Example
- if i give "Hello World...!"  i want "!...dlroW olleH"

6. make a function who reverce a string by word
==>Example
- if i give "Hello World Test User"  i want "User Test World Hello"

7. make a function who reverce a string by wordand also need to reverce each word 
==>Example
- if i give "Hello World Test User"  i want "resU tseT dlroW olleH"

8. Make a function who return a sum of all array(simple array) element 
Note : Must use Reducer 
==>Example
1. [1,2,3,4,5] => Ans is 15  
2. [5,6,4,6] => Ans is 21  

9. Find some Data from below given array of object 
 let marksheet =[
    {   subject:"Gujarati",   marks : 60
    },
    {
        subject:"Maths",
        marks : 40
    },
    {
        subject:"Science",
        marks : 50
    },
    {
        subject:"Hindi",
        marks : 70
    },
    {
        subject:"English",
        marks : 30
    },
]
==>TASKS
1. Make a function to find total sum of all subject.
2. Make a function to find percentage. 
3. Make a function to find User is pass or not (if Percentage is less then 36 he/she is fails other wise pass) 
4. Make a function which will print a centence for each subject
==>Example
    - 36 >= score  => print 'student is fail in Hindi(subject Name)fail' 
    - 36 < score <= 50 => 'student is below average in  Hindi(subject Name)'
    - 50 < score <= 70 => 'student is average in  Hindi(subject Name)'
    - 70 < score <= 90 => 'student is Good in Hindi(subject Name)'
    - 90 < score => 'student is brillient in Hindi(subject Name)'
    
5. make a function who is return a subject name which have highest and lowest number
Note : return a object like { lowentMarsk : "Englis", higestMarks :"Hindi" }


*/
let marksheet = [
  { subject: "Gujarati", marks: 60 },
  { subject: "Maths", marks: 40 },
  { subject: "Science", marks: 50 },
  { subject: "Hindi", marks: 70 },
  { subject: "English", marks: 30 },
];
