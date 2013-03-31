#pragma strict

var speed : float = 40;

function Update () {

	// Turn Right
	if (Input.GetKey (KeyCode.RightArrow)) 
		transform.Rotate(Vector3(0, speed * Time.deltaTime, 0));

	// Turn Left
	if (Input.GetKey (KeyCode.LeftArrow)) 
		transform.Rotate(Vector3(0, -speed * Time.deltaTime, 0));
		
}