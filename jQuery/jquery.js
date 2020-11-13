'use strict';

$(function () {
    const racers = 3; // количество участников
    const circleTime = 20; // время принятия решения участником, в секундах
    for (let i = 1; i < racers + 1; i++) {
        $('#row1').append(`<td class="table-2-1"><span class="timer" id="timer-${i}" style="opacity: 0;"><span class="timer-digits" id="timer-digits-${i}"></span><img class="timer-gif" src="timer.gif"></span></td>`);
        $('#row2').append(`<td class="table-2-2"><ul class="table-2-2-list"><li class="table-2-2-item">Участник №${i}</li><li class="table-2-2-item">ООО "Рога"</li><li class="table-2-2-item">ИНН 6670418941</li><li class="table-2-2-item">г. Екатеринбург</li></ul></td>`);
        $('#row3').append('<td class="table-2-3">-</td>');
        $('#row4').append('<td class="table-2-3">80</td>');
        $('#row5').append('<td class="table-2-3">24</td>');
        $('#row6').append('<td class="table-2-3">30%</td>');
        $('#row7').append('<td class="td"><ul><li>3700000 руб</li><li>-25000 руб</li><li>2475000 руб</li></ul></td>');
        $('#row8').append('<td class="table-2-3">&nbsp;</td>');
    }
    function timer() {
        const circleCount = Date.now() / (racers * circleTime * 1000);
        const elapsedTime = (circleCount - Math.trunc(circleCount)) * racers * circleTime;
        for (let i = 1; i <= racers; i++) {
            const timer = $(`#timer-${i}`);
            timer.css('opacity', '0');
            if (circleTime * (i - 1) < elapsedTime && elapsedTime < circleTime * i) {
                const minutes = Math.trunc((circleTime * i - elapsedTime) / 60);
                let seconds = Math.trunc(circleTime * i - elapsedTime - minutes * 60);
                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }
                const time = `${minutes}:${seconds}`;
                timer.css('opacity', '1');
                $(`#timer-digits-${i}`).text(time);
            }
        }
    }
    const timerId = setInterval(timer);
    clearInterval(timerId)
    setInterval(timer, 100);
});
