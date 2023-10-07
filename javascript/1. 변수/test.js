console.log('hello world');
// //은 한줄 주석  /*     */은 여러줄 주석
//자바스크립트는 동적 타입 언어
//js의 변수 선언 키워드는 3개
// var, let, const

var x; // x라는 식별자로 변수 생성
console.log(x); //undefined 출력
// 왜? 값이 없으니까

x = 5
console.log(x); //5 출력

// 변수를 여러개 선언 및 초기화 
var a = 1, b = 2, c = 3;

// 선언되지 않은 변수 참조: 참조 에러
// console.log(y); 

// 호이스팅-변수 선언 끌어올림
// JS는 실행시 먼저 실행을 위한 환경을 구성하기 때문에, 
// 컨텍스트 내의 변수를 미리 준비한다.
// 변수를 먼저 검사하고 코드를 한줄한줄 실행해서 오류가 아님
console.log(t);
var t;

// 변수명(식별자)
var $;

// let(일반적인 변수선언)과 const(숫자 선언)s
// let은 var과 다르게 호이스팅x
// console.log(k); 
// 우리는 이제 let과 const만 사용한다.
let k = 10;
k = 6;
console.log(k);

// const PI = 3.141592;
PI = 1.414;