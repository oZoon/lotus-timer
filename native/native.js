'use strict';
(() => {
    const racers = 3; // количество участников
    const circleTime = 20; // время принятия решения участником, в секундах

    function prepareRacers() {
        const tr1 = document.querySelector('#row1');
        const tr2 = document.querySelector('#row2');
        const tr3 = document.querySelector('#row3');
        const tr4 = document.querySelector('#row4');
        const tr5 = document.querySelector('#row5');
        const tr6 = document.querySelector('#row6');
        const tr7 = document.querySelector('#row7');
        const tr8 = document.querySelector('#row8');
        for (let i = 1; i < racers + 1; i++) {
            tr1.insertAdjacentHTML('beforeend', `<td class="table-2-1"><span class="timer" id="timer-${i}" style="opacity: 0;"><span class="timer-digits" id="timer-digits-${i}"></span><img class="timer-gif" src="timer.gif"></span></td>`);
            tr2.insertAdjacentHTML('beforeend', `<td class="table-2-2"><ul class="table-2-2-list"><li class="table-2-2-item">Участник №${i}</li><li class="table-2-2-item">ООО "Рога"</li><li class="table-2-2-item">ИНН 6670418941</li><li class="table-2-2-item">г. Екатеринбург</li></ul></td>`);
            tr3.insertAdjacentHTML('beforeend', '<td class="table-2-3">-</td>');
            tr4.insertAdjacentHTML('beforeend', '<td class="table-2-3">80</td>');
            tr5.insertAdjacentHTML('beforeend', '<td class="table-2-3">24</td>');
            tr6.insertAdjacentHTML('beforeend', '<td class="table-2-3">30%</td>');
            tr7.insertAdjacentHTML('beforeend', '<td class="td"><ul><li>3700000 руб</li><li>-25000 руб</li><li>2475000 руб</li></ul></td>');
            tr8.insertAdjacentHTML('beforeend', '<td class="table-2-3">&nbsp;</td>');
        }
    }

    function go() {
        const timerId = setInterval(timer);
        clearInterval(timerId)
        setInterval(timer, 100);
    }
    function timer() {
        const circleCount = Date.now() / (racers * circleTime * 1000);
        const elapsedTime = (circleCount - Math.trunc(circleCount)) * racers * circleTime;
        for (let i = 1; i <= racers; i++) {
            const timer = document.querySelector(`#timer-${i}`);
            timer.style.opacity = 0;
            if (circleTime * (i - 1) < elapsedTime && elapsedTime < circleTime * i) {
                const minutes = Math.trunc((circleTime * i - elapsedTime) / 60);
                let seconds = Math.trunc(circleTime * i - elapsedTime - minutes * 60);
                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }
                const time = `${minutes}:${seconds}`;
                timer.style.opacity = 1;
                document.querySelector(`#timer-digits-${i}`).textContent = time;
            }
        }
    }

    window.start = () => {
        prepareRacers();
        go();
    }
})();

start();
