// 원시 타입(primitive)
// 숫자, 문자열, 논리값(불), undefined, null, symbol
// 불변 값이다. 
// literal 코드 작성시 직접입력할 수 있는 상수 값

//////////////////////////////////////
// 문자열
let bye = "good \x62\x79\x65";

// 반가워요 ! 출력(4자리 유니코드)
let hello = "반\uAC00워요";
console.log(hello);

// Read my javascript {책아이콘} 출력;
// 16진수 코드포인트(새로운 문자표현을 위해 확장)
let readBook = "Read my javascript \u{1F4D6}";
console.log(readBook);
/////////////////////////////////////

/////////////////////////////////////
// 논리값
let x = 3

let good = (x == 3);
let bad = (x == 2);

console.log(good);
console.log(bad);
////////////////////////////////////

////////////////////////////////////
// 특수한 값 undefined와 null
// null은 이 값이 비어있다는 것을 의도적으로 표시(의도적으로 표시)
// undefind 의도하지 않고 아무런 값이 없을때(자동으로 넘겨줌)
var empty;
console.log(empty); // 의도하지 않은 결과
empty = null
console.log(empty); // 의도한 결과
////////////////////////////////////

////////////////////////////////////
// 심볼
// 유일한 값
let sym1 = Symbol();
let sym2 = Symbol();

// Symbol()은 호출할 때마다 새로운 값을 만듦
console.log(sym1 == sym2);

// Symbol()에 인수를 전달하면 설명을 덧붙일 수 있음
let HEART = Symbol("하트")
console.log(HEART.toString());
// Symbol.for 메서드를 활용하면 문자열을 키값으로 
// 동일한 심볼을 생성할 수 있다.
let sym3 = Symbol.for("club");
let sym4 = Symbol.for("club");
console.log(sym3 == sym4);

// 덧붙이는 설명과는 다르다.
let sym5 = Symbol("club");
console.log(sym4 == sym5);
/////////////////////////////////