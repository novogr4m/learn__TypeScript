"use strict";
class Student {
    //constructor 被称为构造函数
    //构造函数会在对象创建时调用
    constructor(name, subject, grade) {
        //在实例方法中，this就表示当前的实例
        //可以通过this向新建的对象中添加属性
        this.name = name;
        this.subject = subject;
        this.grade = grade;
    }
    showGrade() {
        console.log(this.subject, this.name, this.grade);
    }
}
const student1 = new Student('kkk', '编译原理', 75);
const student2 = new Student('hf', '编译原理', 78);
student1.showGrade();
student2.showGrade();
