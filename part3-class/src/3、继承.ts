(function(){

    class studentScore{
        name : string;
        subject : string;
        grade : number;
        constructor(name:string,subject:string,grade:number){
            this.name = name;
            this.subject = subject;
            this.grade = grade;
        }
        showGrade(){
            console.log(this.name,this.subject,this.grade);
        }

    }
    //Database extends studentScore
    //  -此时，studentScore为父类  Database为子类
    //  -使用继承后，子类将会拥有父类所有的方法和属性
    //  -通过继承可以将多个类中共有的代码写进一个父类当中
    //  -如果希望子类中添加一些父类中没有的属性或方法，直接加就可以，如下面的Database类
    // -如果在子类中添加了和父类相同的方法，则子类方法会覆盖掉父类方法，如下面的javaWeb类
    //  -这种子类方法覆盖掉父类方法的形式，我们称为方法重写
    
    //其他知识点
    //OCP原则： 好的设计应该能够容纳新的功能需求的增加, 
    //         但是增加的方式 不是通过 修改原有的模块(类) ,
    //         而是通过增加新的模块(类)来完成的

    //定义个Database类
    //Database类会继承studentScore类
    class Database extends studentScore{    

        teacher:string = '刘宪国';  //  添加属性
        showTeacher(){              //添加方法
            //console.log(this.teacher); 
            console.log(`数据库老师是${this.teacher}`);
        }
    
    }

    //定义一个javaWeb类
    //javaWeb类会继承studentScore类
    class javaWeb extends studentScore {

        showGrade(){
            console.log('我是javaWeb类，我覆盖了父类的showGrade方法，不再显示成绩了！');
        }        
    
    }

    //创建实例对象
    const database1 = new Database('kwd','database',80);
    const javaWeb1 = new javaWeb('kwd','javaWeb',90);
    //调用实例对象身上的方法
    database1.showGrade();
    javaWeb1.showGrade();
    database1.showTeacher();
})();