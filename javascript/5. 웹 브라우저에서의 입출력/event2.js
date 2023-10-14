// 페이지 로드시 이벤트 처리기 등록
window.addEventListener('load', function(evt) {
    console.log('페이지 로드 됨');

    // 테그의 id 값으로 HTML 요소 객체를 가져옴
    let button = document.getElementById('getTime');
    console.dir(button);
    
    // 버튼에 클릭 이벤트 처리기 등록
    button.addEventListener('click', function(evt) {
        let data = new Date();
        console.log(`현재 시각은 ${data} 입니다`);
    });

    // 타이머
    setTimeout(function() {
        console.log('1초 타이머');
    }, 1000);

    setTimeout(function() {
        console.log('0.5초 타이머');
    }, 500);

    // 인터벌
    let sec = 0;
    setInterval(function(){
        sec++;
        console.log("인터벌: " + sec);
    }, 1000);
});

console.log('페이지 로드 안됨');