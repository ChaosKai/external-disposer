var p = new SimplePeer({
    initiator:  true,
    trickle:    false
});

p.on('error', function (err) { console.log('error', err) })

p.on('signal', function (data) {
  console.log('SIGNAL', JSON.stringify(data))
})

p.on('connect', function () {
  console.log('CONNECT')
  p.send('whatever' + Math.random())
})

p.on('data', function (data) {
  console.log('data: ' + data)
})



$(document).ready(() => {
    
    $("#socket-loading-state").text("Verbindung wird hergestellt");
    loading_dot_interval = setInterval(() => {
        if( current_loading_dot == 0 ) {
            current_loading_dot = 1;
            $(".dot").eq(0).removeClass("active");
            $(".dot").eq(1).addClass("active");
            $(".dot").eq(2).removeClass("active");
        } else if( current_loading_dot == 1 ) {
            current_loading_dot = 2;
            $(".dot").eq(0).removeClass("active");
            $(".dot").eq(1).removeClass("active");
            $(".dot").eq(2).addClass("active");
        } else if( current_loading_dot == 2 ) {
            current_loading_dot = 3;
            $(".dot").eq(0).removeClass("active");
            $(".dot").eq(1).addClass("active");
            $(".dot").eq(2).removeClass("active");
        } else if( current_loading_dot == 3 ) {
            current_loading_dot = 0;
            $(".dot").eq(0).addClass("active");
            $(".dot").eq(1).removeClass("active");
            $(".dot").eq(2).removeClass("active");
        }
    }, 450);
    
});

var loading_dot_interval = null;
var current_loading_dot  = 2;
