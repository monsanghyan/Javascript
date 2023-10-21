window.addEventListener('load', function() {
    let canvas = document.querySelector('#myCanvas');
    let ctx    = canvas.getContext('2d');

    let character = {
        x:0,
        y:0,
        width: 32,
        height: 32,
        key: { // 키 눌림 상태
            w: false,
            s: false,
            d: false,
            a: false
        }
    };

    // 캐릭터 그리는 함수
    function drawCharacter() {
        ctx.strokeRect(
            character.x,
            character.y,
            character.width,
            character.height
        )
    };
    // 캐릭터를 지우는 함수
    function clearCharacter() {
        ctx.clearRect(
            character.x - 1,
            character.y - 1,
            character.width + 2,
            character.height + 2
        )
    }

    // 캐릭터를 움직이는 함수
    function moveCharacter() {
        if (character.key.a == true) {
            character.x -= 5;
        }
        if (character.key.d == true) {
            character.x += 5;
        }
        if (character.key.w == true) {
            character.y -= 5
        }
        if (character.key.s == true) {
            character.y += 5
        }
    }

    // 충돌 체크 함수
    function checkCollision() {
        if (character.x < 0) character.x = 0;
        if (character.x > 608) character.x = 608;
        if (character.y < 0 ) character.y = 0;
        if (character.y > 368) character.y = 368;
    }

    // 초기에 한 번 그림
    drawCharacter();

    // 키보드 다운 이벤트 핸들러 등록
    window.addEventListener('keydown', function(evt) {
        // console.log('[down]' + evt.key);
        character.key[evt.key] = true;
    });

    // 키보드 업 이벤트 핸들러 등록
    window.addEventListener('keyup', function(evt) {
        // console.log('[up]' + evt.key);
        character.key[evt.key] = false;
    });

    // 게임 이벤트 루프 30FPS
    setInterval(function () {
        clearCharacter();       // 기존 위치를 지우고
        moveCharacter();        // 움직이고
        checkCollision();       // 나갔나 확인하고
        drawCharacter();        // 그린다
    }, 1000/30);
});