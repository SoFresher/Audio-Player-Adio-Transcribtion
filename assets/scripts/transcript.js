var csv = localStorage.id;
    // console.log(csv);
    $.ajax({
        url: "assets/highlight.json",
        type: 'get',
        dataType: 'json',
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          alert(errorThrown);
          // console.log(JSON.stringify(XMLHttpRequest));
          // console.log(JSON.stringify(textStatus));
          // console.log(JSON.stringify(errorThrown));
        },
        success: function (data) {
            // console.log(data.length);
            var link = data.highlight1.link;
            // console.log(link);

            var durations = data.highlight1.durations;
            console.log(durations.length);

            function getByid(data, id) {
                // loop through data to determine the particular json data with an id.
                for (var i = 0; i < data.length; i += 1) {
                  // console.log(data[i].Nid);
                  if (data[i].id === id) {
                    // console.log(data[i]);
                    return data[i];
                  }
                }
            }
            for (var i = 1; i <= durations.length; i++) {
                var duration = getByid(durations, i);
                console.log(duration.end+'\t'+duration.start);
                dataDur = duration.end-duration.start;
                // console.log(dataDur);
                $('#texts').append('<sapn data-begin="'+duration.start+'"data-dur="'+dataDur+'">'+duration.chunk+'</span>');
            }

          // $('#mp3').attr("src", link);
        }
          
    });

    // var show = '<p id = "texts">'+'\t';
    // var result = csv.split('\n');
    // // console.log(result.length);

    // for (var i = 1; i < result.length-1; i++) {
    //     // console.log(result[i]);
    //     var line = result[i].split(',');
    //     var dataBegin = line[1];
    //     var dataDur = line[2]-line[1];
    //     var text = line[3];
    //     // console.log(dataBegin);
    //     // console.log(dataDur);
    //     show = show + '<span data-dur='+'"'+dataDur+'"' +' data-begin ='+'"'+dataBegin+'"'+'>'+ text+ '</span>'+' ';
    // }
    // show = show + '</p>'
    // $('#passage-text').html(show);
            