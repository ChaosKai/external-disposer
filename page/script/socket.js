var peer = new Peer({secure: true});

peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
});
