//Template literals (String)

var boy1 = "abc";

var boy2 = "xyz";

var combine = `${boy1} is friend of ${boy2}`;

document.write(combine);

console.log(boy1[2]);

var banana = "Bana\'na";

console.log(banana);


//String Methods


//1 String Length

var name = "Alex";

console.log(name.length);


//2 String ToUpperCase

var g = "Alex";

console.log(g.toUpperCase());


//3 String ToLowerCase

var f = "ALEX";

console.log(f.toLowerCase());


//4 String Slice

var fname = "Joergend";

console.log(fname.slice(2,4));

var e = "abcdef";

console.log(e.slice(2,4));


//5 String Replace

var d = "Happy";

console.log(d.replace("Hap", "Gap"));


//6 String Concat

var a = "Alex";

var b = "Joe";

console.log(a.concat(" is a friend of ", b));


//7 String Trim

var c = "      Alex        ";

console.log(c.trim());