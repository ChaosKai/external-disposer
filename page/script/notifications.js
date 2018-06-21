

    var notification_style_link  = document.createElement('link');
    notification_style_link.id   = cssId;
    notification_style_link.rel  = 'stylesheet';
    notification_style_link.type = 'text/css';
    notification_style_link.href = 'https://rawgit.com/ChaosKai/external-disposer/master/page/style/notifications.css';
    document.body.appendChild(notification_style_link);


    $("body").appendChild('<section id="notifications"></section>');

    var notification = {
    
        index: 0,
        
        create: function(type, title, message, time)
        {
            $("#notifications").append('<div id="notification-' + notification.index + '" class="' + type + '"></div>');
            $("#notification-" + notification.index).append('<div class="type"></div>');
            $("#notification-" + notification.index).append('<div class="message">' + message + '</div>');
            
            $("#notification-" + notification.index).css({opacity:"1.0"});
            $("#notification-" + notification.index).animate({opacity:"1.0"}, () => {
                setTimeout((n_index) => {
                    $("#notification-" + notification.index).animate({opacity:"0.0"}, () => {
                        $("#notification-" + notification.index).remove();
                    });
                }, time, notification.index);
            });
            
            notification.index++;
        },
        
        close: function(element)
        {
            
        }
        
    };
