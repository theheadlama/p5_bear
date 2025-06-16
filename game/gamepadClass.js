class GamePad {
    constructor(index) {
        this._gamePadIndex = index;
        this._deadZone = 0.15;
        // constants for input flags, in constructor for convenience
        this._FLAG_LEFT = 1;
        this._FLAG_RIGHT = 2;
        this._FLAG_UP = 4;
        this._FLAG_DOWN = 8;
        // buttons can go here but not yet

    }

    read() {
        // re-fetch state per frame
        const gp = navigator.getGamepads()[this._index];
        //
        let input = 0;
        if( Math.abs(gp.axes[0]) > deadZone || Math.abs(gp.axes[1] > deadZone)) {
            if( gp.axes[0] < 0 ) {
                player1._directionalInput.left = true;        
            }
            else {
            player1._directionalInput.left = false;
            }
            if( gp.axes[0] > 0 ) {
                player1._directionalInput.right = true;        
            }
            else {
            player1._directionalInput.right = false;
            }
            if( gp.axes[1] < 0 ) {
                player1._directionalInput.up = true;        
            }
            else {
            player1._directionalInput.up = false;
            }
            if( gp.axes[1] > 0 ) {
                player1._directionalInput.down = true;
            }
            else {
            player1._directionalInput.down = false;
            }

      }




    }



    
}