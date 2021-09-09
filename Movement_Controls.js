var keycode = {
	left : false,
	right : false,
	up : false,
	down : false,
	w : false,
	a : false,
	d :false
}

var Snoep_Array_Position = [];
var Snoep_Array_Position_P2 = [];

//////////// Player 1 variables ///////////////

var Speed = 0;
var Rotation_Step = 0.5;
var Rotation =0;
var Max_Speed = 5;
var Accelleration = 0.2;
var NumberOfCandy = 10000;
var rotate_real=0;

//////////////////////////////////////////////////

//////////// Player 2 variables //////////////////

var Speed_P2 = 0;
var Rotation_Step_P2 = 0.5;
var Rotation_P2 = 0;
var rotate_real_P2 = 0

var Speed_x = 0;
var Speed_y = 0;

///////////////////////////////////////////////////

$(function(){
	$(document).keydown(function(e) {
		switch(e.which){
			case 37: //left
			keycode.left = true;
			break;
			case 38: //up
			keycode.up = true;
			break;
			case 39: //right
			keycode.right = true;
			break;
			case 40: //down
			keycode.down = true;
			case 87: //w
			keycode.w = true;
			break;
			case 65: //a
			keycode.a = true;
			break;
			case 68: //a
			keycode.d = true;
			break;
		};
	});

	$(document).keyup(function(e) {
		switch(e.which){
			case 37: //left
			keycode.left = false;
			break;
			case 38: //up
			keycode.up = false;
			break;
			case 39: //right
			keycode.right = false;
			break;
			case 40: //down
			keycode.down = false;
			case 87: //w
			keycode.w = false;
			break;
			case 65: //a
			keycode.a = false;
			break;
			case 68: //a
			keycode.d = false;
			break;
		};
	});
	
	
	
	function updateMovement(){
		Speed_x= Math.sin(rotate_real*0.0174532925)*Speed;
		Speed_y=- Math.cos(rotate_real*0.0174532925)*Speed;
		
		var Speed_x_P2 = Math.sin(rotate_real_P2*0.0174532925)*Speed_P2;
		var Speed_y_P2 =- Math.cos(rotate_real_P2*0.0174532925)*Speed_P2
	
		offSetX -=Speed_x;
		offSetY -=Speed_y;
		
		offSetX2 -=Speed_x_P2;
		offSetY2 -=Speed_y_P2
		
		
		
		Player1_Dummy.X += Speed_x;
		Player1_Dummy.Y += Speed_y;
		Player1_Dummy.X -= Speed_x_P2;
		Player1_Dummy.Y -= Speed_y_P2;
		
		
		
		Player2_Dummy.X += Speed_x_P2;
		Player2_Dummy.Y += Speed_y_P2;
		Player2_Dummy.X -= Speed_x;
		Player2_Dummy.Y -= Speed_y;
		
		
		
		/////////////////// Player 2 movement //////////////////
		
		
		if(keycode.w){
			if(Speed_P2 < Max_Speed){
				Speed_P2 += Accelleration;
				
			}
		}
		
		if(!keycode.w){
			if(Speed_P2 > 0){
				Speed_P2 -=(Accelleration/2);
			}
		}
		
		if(Speed_P2 < 0){
			Speed_P2 = 0;
		}
		
		if(keycode.a){
			Player2.Rotation-=(Rotation_Step*Speed_P2)*(Speed_P2/Max_Speed)*(Math.PI/180);
			rotate_real_P2-=(Rotation_Step*Speed_P2)*(Speed_P2/Max_Speed)
			Player2_Dummy.Rotation-=(Rotation_Step*Speed_P2)*(Speed_P2/Max_Speed)*(Math.PI/180);
		}
		
		if(keycode.d){
			Player2.Rotation+=(Rotation_Step*Speed_P2)*(Speed_P2/Max_Speed)*(Math.PI/180);
			rotate_real_P2+=(Rotation_Step*Speed_P2)*(Speed_P2/Max_Speed)
			Player2_Dummy.Rotation+=(Rotation_Step*Speed_P2)*(Speed_P2/Max_Speed)*(Math.PI/180);
		}
		
		
		
		/////////////////////////////////////////////////
		
		if(keycode.left){
			Player.Rotation-=(Rotation_Step*Speed)*(Speed/Max_Speed)*(Math.PI/180);
			rotate_real-=(Rotation_Step*Speed)*(Speed/Max_Speed)
			Player1_Dummy.Rotation-=(Rotation_Step*Speed)*(Speed/Max_Speed)*(Math.PI/180);
		}
		if(keycode.right){
			Player.Rotation+=(Rotation_Step*Speed)*(Speed/Max_Speed)*(Math.PI/180);
			rotate_real+=(Rotation_Step*Speed)*(Speed/Max_Speed)
			Player1_Dummy.Rotation+=(Rotation_Step*Speed)*(Speed/Max_Speed)*(Math.PI/180);
		}
		if(keycode.up){
			if(Speed < Max_Speed){
				Speed += Accelleration
			}
		}
		if(!keycode.up){
			if(Speed > 0){
				Speed -=(Accelleration/2);
			}
		}
		if(Speed < 0){
			Speed = 0;
		}
	}
	
	setInterval(function() {
	  updateMovement();
	}, 1000/FPS);
	
});