"use strict";
(function () {
    //  -以abstract开头的类是抽象类，
    //  -抽象类和其他的区别并不大，只是不能用来创建对象 （不能 new Literature)
    //  -抽象类就是专门用来被继承的类
    //  -抽象类中可以添加抽象方法
    //  -如下面的showBookName()，同样是在前加abstract，不写方法体
    class Literature {
        constructor(bookName) {
            this.bookName = bookName;
        }
    }
    class George extends Literature {
        showBookAuthor() {
            console.log('我是作家George!');
        }
    }
    class yuhua extends Literature {
        showBookAuthor() {
            console.log('我是作家余华！');
        }
    }
    const bookAnimalFarm = new George('AnimalFarm');
    bookAnimalFarm.showBookAuthor();
    const bookToLive = new yuhua('ToLive');
    bookToLive.showBookAuthor();
})();
