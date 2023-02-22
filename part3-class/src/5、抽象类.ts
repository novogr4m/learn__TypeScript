(function(){
    
    //  -以abstract开头的类是抽象类，
    //  -抽象类和其他的区别并不大，只是不能用来创建对象 （不能 new Literature)
    //  -抽象类就是专门用来被继承的类

    //  -抽象类中可以添加抽象方法
    //  -如下面的showBookName()，同样是在前加abstract，不写方法体

    abstract class Literature {
        bookName:string;
        constructor(bookName:string){
            this.bookName = bookName;
        }
        
        //  -定义一个抽象方法
        //  -抽象方法使用abstract开头，没有方法体
        //  -抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract showBookAuthor():void;
    }


    class George extends Literature{
        showBookAuthor(): void {
            console.log('我是作家George!');
        }
    }

    class yuhua extends Literature{
        showBookAuthor(): void {
            console.log('我是作家余华！');
        }
    }
    const bookAnimalFarm = new George('AnimalFarm');
    bookAnimalFarm.showBookAuthor(); 

    const bookToLive = new yuhua('ToLive');
    bookToLive.showBookAuthor();
})();
