'use strict';

let txt = "Java Script";
const shakespeare = 'To be or not to be';
let ukr = 'Ява';

test('test_string', () => {
    /*expect(txt.length).toEqual(11);
    expect(txt.indexOf("Script")).toEqual(5);
    expect(String.fromCharCode(65, 66, 67)).toEqual("ABC");
    expect(String.fromCodePoint(194564)).toEqual("你");
    expect(txt.charAt(8)).toEqual("i");
    expect('ABC'.charCodeAt(0)).toEqual(65);
    expect('\uD800\uDC00'.codePointAt(0)).toEqual(65536);
    expect(txt.concat(' Programming language')).toEqual("Java Script Programming language");
    expect(shakespeare.endsWith('be')).toEqual(true);
    expect(txt.includes('Java')).toEqual(true);
    expect(shakespeare.lastIndexOf('be')).toEqual(16);
    expect('ä'.localeCompare('z', 'de')).toEqual(-1);
    expect(txt.toLowerCase()).toEqual('java script');
    expect(txt.toUpperCase()).toEqual('JAVA SCRIPT');
    expect(shakespeare.substring(3, 5)).toEqual("be");
    expect(shakespeare.substr(3, 2)).toEqual('be');
    expect(shakespeare.slice(-5)).toEqual('to be');
    expect(ukr.localeCompare('Явір')).toEqual(-1);*/
 });

let n = 255;
let float = 12.34;
let longNum = 123456789;
test('test_numbers', () => {
   /* expect(0/0).toEqual(NaN);
    expect(isNaN('13')).toEqual(false);
    expect(isFinite(Infinity)).toEqual(false);
    expect(+'18').toEqual(18);
    expect(parseInt('12.5px')).toEqual(12);
    expect(parseFloat('12.5px')).toEqual(12.5);
    expect(n.toString(16)).toEqual('ff');
    expect(Math.floor(3.1)).toEqual(3);
    expect(Math.ceil(3.1)).toEqual(4);
    expect(Math.round(3.1)).toEqual(3);
    expect(float.toFixed(1)).toEqual('12.3');
    expect(longNum.toLocaleString()).toEqual('123,456,789');*/

});

test('test_arrays', () => {
    /*let fruits = ["Яблоко", "Апельсин", "Груша"];
    console.log("pop return: ", fruits.pop());
    expect(fruits).toEqual(["Яблоко", "Апельсин"]);
    fruits.push("Груша");
    expect(fruits).toEqual(["Яблоко", "Апельсин", "Груша"]);
    console.log("shift return: ", fruits.shift() );
    expect(fruits).toEqual(["Апельсин", "Груша"]);
    let fruits = ["Апельсин", "Груша"];
    fruits.unshift('Яблоко');
    expect(fruits).toEqual(["Яблоко", "Апельсин", "Груша"]);*/
    let arr = ["нам", "не", "страшен", "серый", "волк"];
    expect(arr.length).toEqual(5);
    expect().toEqual();

});

test('test_compare_operators', () => {
    expect().toEqual();
});

test('test_equality_comparison_algorithm', () => {
    expect().toEqual();
});