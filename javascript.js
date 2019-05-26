$(document).ready(function () {

  let div = $("#hello1");
  setInterval(() => {
    div.fadeOut("1000");
    div.fadeIn("1000")
  }, 2000);


  $.ajax({
    // URL: "https://api.darksky.net/forecast/19a8df545a100d1c196c24b96afc72b8/43.6532,79.3832",
    url: "https://api.darksky.net/forecast/cdebfdd2f00f031e2ad5aea7c2cc18f5/43.6532,-79.3832?units=si",

    //url: hyperLink ,
    type: "GET",
    dataType: "jsonp"
  }).then(function (data) {
    console.log(data);
    //$("#weather").html();
    let t = data.currently.temperature;
    let temp = Math.round(t);
    //console.log(temp);
    $("#weather").append(" " + temp + "&#x2103" + "<br>" + " " + data.currently.summary);
  });
});


