// 也可以直接使用字面量进行类型声明
var a;
a = 10;
//联合类型
var b;
b = "male";
b = "female";
var c;
c = true;
c = 'hello';
//any 表示的是任意类型  一个变量设置any相当于对该变量关闭了TS的类型检测
//不建议用any类型
//声明变量如果不指定类型，则ts解析器会自动判断变量的类型为any(隐式any)
//let d;
var d;
d = 10;
d = 'hello';
d = true;
//object表示一个js对象  不成立？
var f;
f = {};
f = function () {
};
//{} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名后边加？ 表示属性是可选的
var e;
e = { name: '孙策' };
//[propName:string]:any 表示任意类型的属性
var g;
g = { name: '曹操', age: 18, gender: '男' };
//传入x ，y number类型 返回number类型
//设置函数结构的类型声明：
//语法：（形参：类型，形参：类型....)=> 返回值
var h;
h = function (n1, n2) {
    return 10;
};
//数组
var x1;
x1 = ['a', 'b', 'c'];
var x2;
x2 = [1, 2, 3, 'a'];
//better 
var a3;
a3 = [1, 2, 3, 4];
//元组: 元组是固定长度的数组
//语法：[类型，类型，类型];
var tp1;
tp1 = ['hello', 1];
//enum 枚举
//定义枚举
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var e1;
e1 = {
    name: "kiss",
    gender: Gender.Male
};
console.log(e1.gender === Gender.Female);
//&表示同时
var j;
j = { name: 'dw', age: 19 };
var k;
var l;
var add;
