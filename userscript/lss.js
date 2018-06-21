var p = null;

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


$('#news_li').before('<li id="disposer_dropdown" class="dropdown"></li>');
    $('#disposer_dropdown').append('<a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-ok" style="margin-right: 8px; color: #FFFFFF"></span>Disposer</a>');
    $('#disposer_dropdown').append('<ul class="dropdown-menu" role="menu"></ul>');
        $('#disposer_dropdown').find(".dropdown-menu").append('<li role="presentation"><a id="disposer_connect">Verbinden</a></li>');


$("#disposer_connect").click((e) => {
    p = new SimplePeer({
        initiator:  false,
        trickle:    false
    });
    
    p.on( 'signal', signal => {
        if( signal.type == "answer" ) {
            console.log("Received Answer!");
            navigator.clipboard.writeText(signal.sdp);
        }
    });
    
    p.on( 'connect', data => {
        console.log("Connected!");
    });
});
