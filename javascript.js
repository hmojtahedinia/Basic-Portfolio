$(document).ready(function () {

  let div = $("#hello1");
  setInterval(() => {
    div.fadeOut("1000");
    div.fadeIn("1000")
  }, 2000);

  var typed = new Typed("#typed", {
    strings: ["One small thing left", "a <b><em>smart</em></b>  and <b><em>talented</em></b> developer..."],
    smartBackspace: true, // Default value
    typeSpeed: 1,
    loop: true,
    startDelay: 1000,
    showCursor: true,
    backDelay: 3000
  });

  var typed6 = new Typed("#full-stack", {
    strings: ["I am a full stack web developer... ^1000 <br> with a passion for thoutful design,and teaching. ^1000\n As a web developer, I enjoy using my obsessive attention to detail. ^1000 <br> my unequivocal love for making things, and my mission- driven work ethic to literally change the world. ^1000 <br> That's why I’m excited to make a big impact at a high growth company."],
    typeSpeed: 10,
    backSpeed: 0,
    loop: true
  });

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


