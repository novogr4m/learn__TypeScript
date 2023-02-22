(function(){
    
    //通过之前的学习我们知道，描述一个对象的类型可以这样：
    type myType = {
        name:string;
        age:number;
    };
    //使用myType
    const obj:myType = {
        name: 'jkk',
        age:100
    };
    
//接口知识
    //  -接口是ts独有，编译成js是看不到的
    //  -接口(interface)用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
    //  -同时接口也可以当成类型声明去使用
    //  -用法如下：
    interface myInterface{
            name:string;
            age:number;
        }
    //  -接口可以同名 同名的接口会将所有属性合在一起
    interface myInterface{
        gender:string;
    }

    
    const obj2:myInterface = {
        name:'ssq',
        age:1,
        gender:'man'
    }

    //  -！！！注意！！！
    //  -接口可以在定义类的时候去限制类的结构
    //  -接口中所有的属性都不能有实际的值
    //  -接口只定义对象的结构，而不考虑实际值
    //  -在接口中所有方法都是抽象方法
    
    interface myInter{
        name:string;
        sayHello():void;
    }

    //使用接口创建类
    class myClass implements myInter{
        //类中的属性
        name:string;
        constructor(name:string){
            this.name = name;
        }
        //类的方法
        sayHello():void{
            console.log(this.name)
        }
    }

    const aClass = new myClass('山泥若');
    console.log(aClass);
})();