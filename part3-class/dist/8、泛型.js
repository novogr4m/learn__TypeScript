"use strict";
function fn(a) {
    return a;
}
//在定义函数或是类时，如果遇到类型不明确就可以使用泛型
function fnn(a) {
    return a;
}
//使用泛型
//可以直接调用具有泛型的函数
let result = fnn(10); //不指定泛型，TS可以自动对类型进行推断
let result_2 = fnn('helloworld'); //指定泛型
//可以指定多个泛型
function fnn2(a, b) {
    console.log(b);
    return a;
}
fnn2(123, 'helloworld');
//T extends Inter 表示泛型T必须是Inter实现类（子类）
function fnn3(a) {
    return a.length;
}
