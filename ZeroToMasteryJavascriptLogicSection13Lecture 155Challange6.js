/*Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/
// Solution to Question 1:
var array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

var answer = [];
function answerArrayFromAbove() {
var maxSort = array.sort( (a, b) => a - b );
for (i=0; i < array.length; i++) {
if (maxSort[i] === maxSort[i-1]) {continue;}
else {var result = maxSort.filter((item) => item === maxSort[i]);
answer.push(result);}
}
return answer;
}

/*
answerArrayFromAbove();
    
    
(9) [Array(4), Array(3), Array(1), Array(1), Array(1), Array(2), Array(1), Array(1), Array(1)]
0: (4) [1, 1, 1, 1]
1: (3) [2, 2, 2]
2: [4]
3: [5]
4: [10]
5: (2) [20, 20]
6: [391]
7: [392]
8: [591]
length: 9
__proto__: Array(0)
*/

    
/*Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]*/
//Solution:
var uncl = [1, "2", "3", 2];

var clean = [];
var isnumb = [];
var islett = [];
var le ='let';
var nu = 5;
function myClean(arr, a, b) {
for (i=0; i < arr.length; i++) {
if (typeof(arr[i])===typeof(a)) {isnumb.push(arr[i]);}
else { islett.push(arr[i]);}
}
clean.push(isnumb);
clean.push(islett);
return;
}

/*
undefined
myClean(uncl, nu, le); 
undefined
clean;
(2) [Array(2), Array(2)]
0: (2) [1, 2]
1: (2) ["2", "3"]
length: 2
__proto__: Array(0)
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]*/

var de = [1,2,3,4,5,6,7,8,9,0];
var mi = 5;
var dec = [];
var main = [];

function answerMe(arr, b) {
for (i=0; i < arr.length; i++) {
var res =  b - arr[i];
var t = arr.find((item) => item == res);
if ( t>=0) {
              var v = dec.find((item) => item == res);
              if (v>=0) {continue;}
              else
              {
               dec.push(res);
               dec.push(arr[i]);
               }
}
}
for (i=0; i < dec.length; i=i+2) {
var temi = [];
temi.push(dec[i]);
temi.push(dec[i+1]); 
main.push(temi);
}
return;
}

/*
answerMe(de, mi); 
undefined
main;
(3) [Array(2), Array(2), Array(2)]
0: (2) [4, 1]
1: (2) [3, 2]
2: (2) [0, 5]
length: 3
__proto__: Array(0)
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
//Solution:

var x, y, z;
function myFunction(colory) {
var rgbArr = [];
var colSmall = colory.toLowerCase();

if (colory.length < 8 ) { 
var h = colSmall.split('');


for (var i = 1; i < colory.length; i = i+2) {
x = h[i];

y = h[i+1];

switch (x) {
    case 'a':
x = '10';
break;
    case 'b':
x = '11';
break;
    case 'c':
x = '12';
break;
    case 'd':
x = '13';
break;
    case 'e':
x = '14';
break;
    case 'f':
x = '15';
break;
default:
x = h[i];
}


switch (y) {
    case 'a':
y = '10';
break;
    case 'b':
y = '11';
break;
    case 'c':
y = '12';
break;
    case 'd':
y = '13';
break;
    case 'e':
y = '14';
break;
    case 'f':
y = '15';
break;
default:
y = h[i+1];
}

var x1 = Number(x);
var y1 = Number(y);


z = x1*16+y1;
rgbArr.push(z);

var resu = rgbArr.toString();
var result = 'RGB(' + resu + ')';
}
}

else {
var colSmall = colory.toLowerCase();
var hexArr = []; 
var cs = colSmall.slice(4, colSmall.length - 1); 
var scarr = cs.split(',');
 for (var i = 0; i < scarr.length; i++) { 
var xi = Number(scarr[i]); 
x = Math.trunc(xi/16); 
y = xi - 16*x; 
var  x2 = x.toString(10); 
var  y2 = y.toString(10); 
switch (x2) { 
case '10': 
x2 = 'a'; 
break; 
case '11': 
x2 = 'b'; 
break; 
case '12': 
x2 = 'c'; 
break; 
case '13': 
x2 = 'd'; 
break; 
case '14': 
x2 = 'e'; 
break; 
case '15': 
x2 = 'f'; 
break; 
default: 
x2 = x.toString(10);
 } 
switch (y2) { 
case '10': 
y2 = 'a'; 
break; 
case '11': 
y2 = 'b'; 
break;
 case '12':
 y2 = 'c'; 
break; 
case '13': 
y2 = 'd'; 
break; 
case '14': 
y2 = 'e'; 
break; 
case '15':
 y2 = 'f'; 
break; 
default: 
y2 = y.toString(10);
 }
 hexArr.push(x2); 
hexArr.push(y2); 
var res = hexArr.join(''); 
var result = '#' + res; 
}
} 
return result;
 }


/*
undefined
myFunction('#456032');
"RGB(69,96,50)"
myFunction('rgb(145,78,94)');
"#914e5e"
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////THE END ////////////////////////////////////////////////////////////////////////////


















