//声明一个变量a  同时指定它的类型为number
let a: number;
 
a = 10;
a = 3.41;
a = 'hello';    //代码会报错，变量a的类型是number 不能赋值字符串

//声明完变量直接进行赋值
let c: string = 'hello';
let v: boolean = true;

//如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let d = 123;
d = 'sss';  //报错

//函数声明方法

//参数f、e都为数字  并且sum返回一个number
function sum ( f: number , e: number): number{
    return f + e;
}
sum(123, 2340); //正常
sum(123, "456");//报错