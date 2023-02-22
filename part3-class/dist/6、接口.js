"use strict";
(function () {
    //使用myType
    const obj = {
        name: 'jkk',
        age: 100
    };
    const obj2 = {
        name: 'ssq',
        age: 1,
        gender: 'man'
    };
    //使用接口创建类
    class myClass {
        constructor(name) {
            this.name = name;
        }
        //类的方法
        sayHello() {
            console.log(this.name);
        }
    }
    const aClass = new myClass('山泥若');
    console.log(aClass);
})();
