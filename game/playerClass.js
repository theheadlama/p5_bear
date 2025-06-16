// Player class
class Player {
  constructor(character,startingPosition) {
    this._position = startingPosition;
    this._velocity = createVector(0,0);
    this._speed = 8;
    this._impulse = .5;
		this._dampingFactor = 0.9;
    this._w = 10;
    this._h = 10;
		this._priorMovement = "";
    this._movement = "";
    this._sprite = character;
    this._gamePad = null;

    this._directionalInput = {
      input: true,
      up: false,
      down: false,
      left: false,
      right: false
    };

    this._lastDirectionalInput = {
      input: true,
      up: false,
      down: false,
      left: false,
      right: false
    };

  } // constructor
  
  update() {
  //  this._directionalInput.input = false;
    this.setMovement();
  }

  setMovement() {
 
    if( this._directionalInput.up || this._directionalInput.down || this._directionalInput.left || this._directionalInput.right ) {

        // todo: convert to acceleration vector
        if( this._directionalInput.up === true ) {
          if( this._lastDirectionalInput.down === true ) {
            this._velocity.y = 0;
            this._lastDirectionalInput.down = false;
          }
          this._lastDirectionalInput.up = true;
          this._velocity.add(createVector(0,-this._impulse));
        }
        else if( this._directionalInput.down === true ) {
          if( this._lastDirectionalInput.up === true ){
            this._velocity.y = 0;
            this._lastDirectionalInput.up = false;
          }
          this._lastDirectionalInput.down = true;
          this._velocity.add(createVector(0,this._impulse));
        }
        // convert y axis to zero if there's no y
        else {
          this._velocity.y = 0;
        }
        if( this._directionalInput.left === true ) {
          if( this._lastDirectionalInput.right === true ) {
            this._velocity.x = 0;
            this._lastDirectionalInput.right = false;
          }
          this._lastDirectionalInput.left = true;
          this._velocity.add(createVector(-this._impulse,0));
        }
        else if( this._directionalInput.right === true ) {
          if( this._lastDirectionalInput.left === true ) {
            this._velocity.x = 0;
            this._lastDirectionalInput.left = false;
        }
          this._lastDirectionalInput.right = true;
          this._velocity.add(createVector(this._impulse,0));
        }
      // convert x axis to zero if there's no y input
      else {
          this._velocity.x = 0;
      }
    }
    else {
      this._velocity.mult(this._dampingFactor);
      // reduce to zero if near zero
      this._velocity.clampToZero();
    }

  }
  
  move() {
    this._velocity.limit(this._speed);
    this._position.add(this._velocity);  
		this._position.x = constrain(this._position.x,0,width - this._w);
    this._position.y = constrain(this._position.y,0,height - this._h);
  } // move
  
  show() {
    image(this._sprite, this._position.x, this._position.y, 50 ,50);
  } 

  set directionalInput(value) {
    this._directionalInput = value;
  }

  set movementInput(currentMovement) {
    this._movement = currentMovement;
  }

  set position(newPosition) {
    this._position.x = newPosition.x;
    this._position.y = newPosition.y;
  }

  get position() {
    return this._position;
  }

  get gamePad() {
    return this._gamePad;
  }
  
} 

class Bear extends Player {
  constructor(color,startingPosition){
    super(color,startingPosition);
     this._lerpAmount = 0.03;
     this._speed = 0; 
     this._impulse = 0;
  }

  update() {
      let midpointX = (player1.position.x + player2.position.x) / 2;
      let midpointY = (player1.position.y + player2.position.y) / 2;
      
      let targetPosition = createVector(midpointX, midpointY);

      // Use p5.Vector's built-in lerp method.
      // This modifies this._position directly.
      this._position.lerp(targetPosition, this._lerpAmount);

      this._velocity.set(0, 0);

  }

  calculateMovement(){
    determineTargetPosition();
  }

  determineTargetPosition(){

  }

}
