// Отвечает является ли объект уткой.
isDuck = function (obj) {
    return obj && obj.quacks && obj.swims;
};

// Отвечает является ли объект собакой.
isDog = function (obj) {
    return obj instanceof Dog;
};


// Основа для утки.
function Duck() {
    this.quacks = () => { console.log('quack') };
    this.swims = () => { console.log('float: both;') };
}


// Основа для собаки.
function Dog() {
    this.swims = () => { console.log('float: none;') };
}


// Колода Шерифа, нижнего игрока.
const seriffStartDeck = [
    new Card('Мирный житель', 2),
    new Card('Мирный житель', 2),
    new Card('Мирный житель', 2),
];

// Колода Бандита, верхнего игрока.
const banditStartDeck = [
    new Card('Бандит', 3),
];


// Создание игры.
const game = new Game(seriffStartDeck, banditStartDeck);

// Глобальная функция, позволяющая управлять скоростью всех анимаций.
function getSpeedRate() {
    return 1;
}

// Запуск игры.
game.play(false, (winner) => {
    alert('Победил ' + winner.name);
});
