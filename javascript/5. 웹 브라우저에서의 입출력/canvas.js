///////////////////////////////////////
// canvas를 활용한 컴퓨터 그래픽스
// 저수준 API
// 단순한 기능만 재공하지만 속도가 매우 빠르다
window.addEventListener('load', function() {
//     // querySelector는 getElement~ 처럼 HTML 요소를 가져올때 사용한다
//     // 1. id값으로 가져로는 경우        : #id
//     // 2. tag로 가져오는 경우           : 태그명
//     // 3. class로 가져오는 경우         : .class
//     // 4. 기타 속성으로 가져오는 경우    : [속성명=속성값]
//     let canvas = this.document.querySelector('#myCanvas');

//     // 그림을 그리기 위한 환경을 가져옴
//     let ctx = canvas.getContext('2d');

//     // 좌표 (50, 60) 의 위치에 너비 200 높이 100 짜리 사각형 그리기
//     ctx.strokeRect(50, 60, 200, 100);
//     ctx.fillRect(50, 170, 200, 100);
//     ctx.clearRect(90, 100, 400, 10);
// });

    let canvas = document.querySelector('#myCanvas');
    let ctx = canvas.getContext('2d');

    // 속이 비어있는 삼각형 그리기
    ctx.beginPath();
    ctx.moveTo(60,10);
    ctx.lineTo(110, 100);
    ctx.lineTo(10, 100);
    ctx.closePath();
    ctx.stroke();

    // 속이 채워진 삼각형 그리기
    ctx.beginPath();
    ctx.moveTo(60,120);
    ctx.lineTo(110, 210);
    ctx.lineTo(10, 210);
    ctx.fill(); // fill의 경우 closePath를 호출할 필요가 없음
});