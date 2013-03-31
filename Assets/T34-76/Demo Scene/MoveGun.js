#pragma strict

var speed : float = 15;
var curRotation : float = 0;


function Update () {

	// Gun Down
	if(Input.GetKey(KeyCode.DownArrow)) {
		if(curRotation > -5) {
			transform.Rotate(Vector3(speed * Time.deltaTime, 0, 0));
			curRotation -= speed * Time.deltaTime;
		}
	}


	// Gun Up
	if(Input.GetKey(KeyCode.UpArrow)) {
		if(curRotation < 45) {
			transform.Rotate(Vector3(-speed * Time.deltaTime, 0, 0));
			curRotation += speed * Time.deltaTime;
		}
	}
}