"use strict";
(function () {
    //  -ts可以在数学前添加属性的修饰符
    //  -public 修饰的属性可以在任意位置访问  默认值
    //  -private 私有属性，私有属性只能在当前类内部进行访问 
    //      -通过在类中添加方法使得私有属性可以被外部访问
    //  -protected 受包含的属性，只能在当前类和当前类的子类当中使用
    //  -protected 
    // 定义一个表示游戏的类
    class Game {
        constructor(name, price) {
            this._name = name;
            this._price = price;
        }
        //定义方法，用来获取name属性
        // ts中设置getter方法的方式
        get name() {
            return this._name;
        }
        //定义方法，用来设置name属性
        set name(value) {
            this._name = value;
        }
        get price() {
            return this._price;
        }
        set price(value) {
            //判断价格是否合法，合法则修改
            value >= 0 ? this._price = value : null;
        }
    }
    const RDR = new Game('荒野大镖客', 82);
    console.log(RDR.name);
    RDR.name = '荒野小嫖客'; //当修饰符为private 且没有set方法 不能修改RDR.name
    console.log(RDR.name);
    RDR.price = 238;
    RDR.price = -22;
    console.log(RDR);
    //private 和 protected的区别:
    //  -private只能在当前类内部进行访问
    //  -protected只能在当前类和当前类的子类当中使用
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    //定义类B继承A
    class B extends A {
        //尝试访问A中的num
        showNum() {
            // console.log(this.num); // 报错，private只能在当前类中访问 将num改为protected修饰则可以
        }
    }
    const ttt = new B(13);
    // ttt.num = 111; //当num为protected时也不能访问，protected只在类中可访问
    //可以直接将属性定义在构造函数中，但是必须加修饰符public、protected、private    
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.name = name;
            this.age = age;
        }
    }
    const cTest = new C('ddd', 123);
    console.log(cTest);
})();
