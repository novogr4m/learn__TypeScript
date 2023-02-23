//当对变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
//所以如果你的变量的声明和赋值是同时进行的，可以省略掉类型声明

//ts中的基本类型有：
    //1、number 2、string 3、boolean 4、字面量  5、any
    //6、unknown 7、void 8、never 9、object 10、array 11、tuple  12、enum

//
let w: string;
w = "iam a string";

// 也可以直接使用字面量进行类型声明
let a: 10;
a= 10;

//联合类型
let b: "male" | "female";
b = "male";
b = "female";

let c: boolean | string;
c = true;
c = 'hello';

//any 表示的是任意类型  一个变量设置any相当于对该变量关闭了TS的类型检测
//不建议用any类型

//声明变量如果不指定类型，则ts解析器会自动判断变量的类型为any(隐式any)
//let d;

let d: any;  //===let d;
d = 10;
d = 'hello';
d = true;

//unknown:表示未知类型的值
let u: unknown;
u = 10;
u = 'hello';


//any与unknown区别：
let s: string;
//d的类型是any，可以赋值给任意变量
// s=d; //不报错
//unknown  是一个类型安全的any
//unknown 类型的变量，不能直接赋值给其他变量
// s = u;  //报错

//正确写法：
//if(typeof e === 'string'){
//      s = u;
//}
//类型断言:可以用来告诉解析器变量的实际类型
s = u as string;

//void 用来表示空，以函数为例，就表示没有返回值的函数
function fn1(): void{
}

//never 表示永远不会返回结果
function fn2(): never{
    throw new Error('报错了');
}


//object表示一个js对象  不成立？
let f:object;   //一般不去使用
f = {};
f = function(){};


//{} 用来指定对象中可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名后边加？ 表示属性是可选的

let e:{name: string,age?:number};
e={name:'孙策'};

//[propName:string]:any 表示任意类型的属性
let g:{name:string,[propName:string]:any};
g={name:'曹操',age:18,gender:'男'};

//传入x ，y number类型 返回number类型
//设置函数结构的类型声明：
    //语法：（形参：类型，形参：类型....)=> 返回值
let h: (x:number,y:number)=>number;
    h=function(n1,n2):number{
        return  10;
    }


//数组
let x1: string[];
x1 = ['a', 'b', 'c'];
let x2: any[];
x2=[1,2,3,'a'];
//better 
let a3: Array<number>;
a3 = [1, 2, 3, 4];

    
//元组: 元组是固定长度的数组
//语法：[类型，类型，类型];
let tp1: [string, number];
tp1=['hello',1];

//enum 枚举
//定义枚举
enum Gender{
    Male,
    Female
}
let e1:{name:string,gender:Gender};
e1={
    name:"kiss",
    gender:Gender.Male  
}
console.log(e1.gender === Gender.Female)

//&表示同时
let j:{name:string} &{age:number};
j={name:'dw',age:19};

//类型别名
type myType1 = string;
type myType2 = 1|2|3|4;
let k:myType2;
let l:myType1;
let add:number;
