$(function() {
    document.getElementById("logresults").value = '';
    $('#logresults').hide();
    $('#download').hide();
    // console.log($("#logresults").value);
    // let i = 1;
    var audio = document.getElementById('passage-audio');
    audio.addEventListener('play',function(){
        var startTime = (audio.currentTime);
        startTime = parseFloat(startTime.toFixed(4));
        // console.log(startTime);
        document.getElementById('logresults').value = document.getElementById("logresults").value+startTime+',';
        // console.log(logResult);
        $('#logresults').show();
        $('#download').show();
    },false);

    audio.addEventListener('pause',function(){
        var endTime = (audio.currentTime);
        endTime = parseFloat(endTime.toFixed(4));
        document.getElementById('logresults').value = document.getElementById('logresults').value+endTime+'\n';
        // i = i + 1;
    },false);

    var no = $('span').length;
    // console.log(no)

})
function saveaschunk() {
    var a = document.createElement('a');
    with (a) {
        href='data:text/csv;base64,' + btoa(document.getElementById('chunks').value);
        download='csvfile.csv';
    }
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
function savese() {
    var a = document.createElement('a');
    with (a) {
        href='data:text/csv;base64,' + btoa(document.getElementById('logresults').value);
        download='csvfile.csv';
    }
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
