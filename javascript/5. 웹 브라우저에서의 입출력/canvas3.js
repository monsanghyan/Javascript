window.addEventListener('load', function() {
    // arc 호 그리기
    let canvas = document.querySelector('#myCanvas');
    let ctx = canvas.getContext('2d');

    // let radian30 = 30*Math.PI / 180;
    // let radian120 = 120*Math.PI / 180;

    // ctx.beginPath();
    // ctx.arc(100, 100, 80, radian30, radian120, false);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(100, 100, 80, radian30, radian120, true);
    // ctx.stroke();

    // 둥근 모서리
    let radian = Math.PI / 180;
    let radian270 = 270*Math.PI / 180;

    ctx.beginPath();
    ctx.moveTo(10, 100);
    ctx.lineTo(300, 100);
    ctx.arc(300, 140, 40, radian270, radian, false);
    ctx.lineTo(340, 400);
    
    ctx.stroke();
});