const startGame = new InputController(document.body, {
    actionsToBind: {
            "left": {
                    keys: [37,65],
                    enabled: false
                },
            "right": {
                    keys: [39,68],
                    enabled: false
            },
            "top": {
                keys: [38,87],
                enabled: false
            },
            "bottom": {
                keys: [40,83],
                enabled: false
            }
    
    },
    target: '.point',

});


