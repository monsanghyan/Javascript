///////////////////////////////////////////////////////
// 객체

// 객체 리터럴로 객체 생성
// 프로퍼티의 이름은 문자열이 되어도 상관없다
let card = {suit: '하트', rank: 'A'};
console.log(card);

// 프로퍼티의 이름은 문자열이 되어도 상관없다.
card = {'suit':'하트', 'rank':'A'};

// 프로퍼디 값의 참조 방법
console.log(card.suit);
console.log(card["rank"]);
console.log(card.test);     // 없는 값을 참조하면 undefined

// 프로퍼티의 값 추가
card.value = 14;
console.log(card.value);

// 객체의 프로퍼티 삭제 
delete card.value;
console.log(card.value)

// 객체 프로퍼티 보유 여부 확인
console.log("suit" in card);
console.log("random" in card);
console.log("toString" in card); // True
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// 메서드
card = {
    suit : "하트",
    rank : "A",
    showCard: function() {
        // this 키워드는 함수의 소유자를 가르킨다.
        console.log('이 카드는 ${this.suit} ${this.rank} 입니다.');
    }
};
card.showCard();
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// 함수

function square(x) {
    return x * x;
}
console.log(square(9));

// 함수는 객체다.
// 객체와 동일한 조작이 가능하다.
square.test = "testValue";
console.log(square.test);
console.log(square);
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// 객체 생성자
function Card(suit, rank) {
    // new 키워드가 붙은경우
    // this = {}:
    this.suit = suit;
    this.rank = rank;
    // new 키워드가 붙은경우
    // return this;
}

card = new Card("하트", "A");
console.log(card);

// 전역 함수의 this는 기본적으로 
// 글로벌 객체인 window를 가리킨다. 
card = Card("하트", "A");
console.log(card);
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// 클래스 (ES6버전 생성자)
class Circle{
    // 파이썬의 __init__역할
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }

    // 원의 면적 계산 메서드
    area() {
        return Math.PI * (this.radius ** 2);
    }
}
let circle = new Circle({x:0, y:0}, 2.0);
console.log(`넓이 = ${circle.area()}`);

class Product{
    constructor(name, weight, price) {
        this.name = name
        this.weight = weight
        this.price = price
    }
    calculate(weight) {
        return (weight / this.weight)*this.price;
    }
}
let fork = new Product('삼겹살', 100, 1690);
console.log(`가격 = ${fork.calculate(150)}`);

// 객체 분류
// 네이티브 객체: 어떤 브라우저에서도 사용가능 (표준)
// 호스트 객체: 브라우저마다 정의하는 객체