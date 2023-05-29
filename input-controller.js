class InputController {
    constructor(container, { actionsToBind, target }) {
        this.point = document.createElement('div');
        this.point.classList.add('point')

        container.append(this.point);

        this.actionsToBind = actionsToBind;

        const keyID = Object.values(actionsToBind);

        window.onkeydown = (e) => {

            for (const iterator of keyID) {
                if(e.keyCode == iterator.keys[0] || e.keyCode == iterator.keys[1]) {
                    console.log(actionsToBind);
                }
            }

            // if(e.keyCode == 65 || e.keyCode == 37) {
            //     console.log('Движение влево');
            // } 
            // else if (e.keyCode == 39 || e.keyCode == 68) {
            //     console.log('Движение вправо');
            // }
            // else if (e.keyCode == 87 || e.keyCode == 38) {
            //     console.log('Движение вверх');
            // }
            // else if (e.keyCode == 83 || e.keyCode == 40) {
            //     console.log('Движение вниз');
            // }
        }
    }
}
