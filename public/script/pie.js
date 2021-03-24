$(function() {
    $('.chart').easyPieChart({
        barColor: '#8CBA84',  //차트가 그려질 색
        trackColor: '#ccc',  // 차트가 그려지는 트랙의 기본 배경색(chart1 의 회색부분)
        lineCap: 'butt', // 차트 선의 모양 chart1 butt / chart2 round / chart3 square
        lineWidth: 20, // 차트 선의 두께
        size: 90, // 차트크기
        animate: 1000, // 그려지는 시간 
        onStart: $.noop,
        onStop: $.noop
    });
});