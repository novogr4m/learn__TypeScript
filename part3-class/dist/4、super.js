"use strict";
(function () {
    //创建一个父类Literature（文学作品
    class Literature {
        constructor(bookName) {
            this.bookName = bookName;
        }
        showBookName() {
            console.log(this.bookName);
        }
    }
    //super是什么？
    class George extends Literature {
        showBookName() {
            //在类的方法中 super 表示当前类的父类
            super.showBookName(); //执行父类的showBookName方法，即console.log(this.bookName)
        }
    }
    //super 常见用法 (super知识最关键一点 )
    class yuhua extends Literature {
        constructor(bookName, bookPrice) {
            //如果在子类中重写了构造函数（即constuctor），在子类构造函数中必须对父类
            //的构造函数进行调用
            //!!!并且有参数还要传参
            super(bookName);
            this.bookPrice = bookPrice;
        }
    }
    const bookAnimalFarm = new George('AnimalFarm');
    bookAnimalFarm.showBookName();
    const bookToLive = new yuhua('ToLive', 20);
    console.log(bookToLive);
})();
