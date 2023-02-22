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

let d: any;
d = 10;
d = 'hello';
d = true;

//object表示一个js对象  不成立？
let f:object;
f = {};
f = function(){

};
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
    let x1:string[];
    x1=['a','b','c'];
    let x2:any[];
    x2=[1,2,3,'a'];
    //better 
    let a3: Array<number>;
    a3=[1,2,3,4];

    
    //元组: 元组是固定长度的数组
        //语法：[类型，类型，类型];
    let tp1:[string,number];
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
