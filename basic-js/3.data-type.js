/*

data-type :
JavaScript is a dynamic type language, means you don't need to specify type of the variable because it is dynamically used by JavaScript engine. You need to use var/let/const here to specify the data type. It can hold any type of values such as numbers, strings etc. For example:
-like
var a=40;//holding number
var b="Rahul";//holding string

------------------------------------------------------------------------------
TYPE OF DATA :-

Primitive data type:
1. String - sequence of characters e.g. "hello"
2. Number - numeric values e.g. 100
3. Boolean - boolean value either false or true
4. Undefined - undefined value
5. Null - null i.e. no value at all

Non-primitive (reference) data type
1. Object - represents instance through which we can access members
2. Array - represents group of similar values

------------------------------------------------------------------------------
1. STRING:
var str = "test"
var str = 'test'
var str = `test`

2. NUMBER:
var no = 10
var no = 10.5
var no = -10

3. BOOLEAN:
var no = true
var no = false

4. UNDEFINED:
var x= undefined;

5.NULL:
var x=null;


6. OBJECT: 

var obj = {
    key-name : value,
    a:null,
    b:{},
    c:[1,{a:90}]
}
note => its depends on key name 
objectName.keyName => obj.a => null
obj.c[0] => 1
obj.c[1].a => 90

7. ARRAY: 

var arr = [null,[{a:[1,2]}],"str",undefined,{},true]
index start from 0
array access = arrayName[index]
arr[2] => "str"
arr[1][0].a[1] => 2
9%2
 
*/
