//使用class关键字来定义一个类
class Person{
    //对象中主要包含了两个部分：
    //属性
        //定义实例属性
        name: string ='孙笑川';
        age: number = 100;
        //定义类属性
        static EducationBackground : string = 'technicalSecondary';  //学历是中专
        //访问方法：
            //Person.EducationBackground
    //方法
        //定义方法
        sayHello(){
            console.log('hello world!');
        }
        //如果方法以static开头则方法就是类方法，可以直接通过类去调用
        static sayDaddy(){
            console.log("hello dad");
        } 
}
//
const per = new Person();

console.log(per);
//访问实例对象per上的属性和方法
console.log(per.name);
per.sayHello();
//访问类对象Person上的类属性
console.log(Person.EducationBackground);
Person.EducationBackground = 'undergraduate';   //类属性也是可以修改的
console.log(Person.EducationBackground);
//访问类对象Person上的类方法
Person.sayDaddy();

