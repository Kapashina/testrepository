var $myNumber = 256;
    $myString = 'Hello, World!';
    $myBoolean = true;
    $myNull = null;
    $myUndef = undefined;

    console.log(typeof $myNumber);
    console.log(typeof $myString);
    console.log(typeof $myBoolean);
    console.log(typeof $myNull); 
    console.log(typeof $myUndef);


var $myNum = 25.5;
    console.log($myNum.toFixed(5));

var $i = 100;
    console.log($i++);
    console.log($i);
    console.log(++$i);
    // console.log($i);
var $i = 100;
    console.log($i--);
    console.log($i);
    console.log(--$i);

var $a = 10;
    $a +=5;
    console.log($a);
var $b = 12;
    $b -=5;
    console.log($b);
var $c = 20;
    $c *=5;
    console.log($c);
var $d = 200;
    $d /=5;
    console.log($d);
var $e = 13;
    $e %=5;
    console.log($e);

console.log(Math.PI);

var $p = 89.279;
    console.log(Math.round($p));

console.log(Math.round(Math.random()*10));

console.log(Math.pow(2,5));

var $myString = 'Lorem ipsum dolor sit amet';
    console.log($myString);
    console.log($myString.length);
    console.log($myString.substring(5,10));
    console.log($myString.indexOf('dolo'));
    console.log($myString.replace('dolor','DOLLORS'));

var $myStr = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, vero.';
    console.log($myStr.toUpperCase());
    console.log($myStr.toLowerCase());
    console.log($myStr.split(' '));
    console.log($myStr.split(''));


var a = 0;
    b = 0;
    isTrue = true;
    isFalse = false;
isTrue && (a=5);
console.log(a);


function test(string) {
    return 'Hello' + string;
}
console.log(test(', world!'));

var person = {
    name:'Jhon',
    age: 25,
    gender: 'male',
    sayHi: function () {
        return 'Hello, Jhon';
    }
};
console.log(person);
console.log(person.sayHi());

var obj = Object.create({x:10, y:20});
obj.property = 'prop';
obj.x = 50;
console.log(obj.x);
console.log(obj.y);
console.log(obj.property);
console.log(obj.hasOwnProperty('property'));
console.log(obj.hasOwnProperty('y'));
console.log(obj);



// var $array = [256, 'Hello, World!', true, null, undefined];
//     console.log(typeof $array);

var a = 10, b = 20;
a = b; //20
b = 30; //30


var a = {x: 10},
    b = {x: 20};
a = b;
b.x = 30;
console.log('a.x=' + a.x);
console.log('b.x=' + b.x);


var x = 15,
    text = '';
text = x > 10 ? 'x more 10' : 'x not more 10';
console.log(text);

var x = 10,
    text = '';
text = x > 10 ? 'x more 10' : x < 10 ? 'x not more 10' : 'x is 10';
console.log(text);