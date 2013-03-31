#pragma strict

var spawnPoint : Transform;
var bulletObject : GameObject;
var fireEffect : GameObject;
private var reloadPercent : float;
var reloadSpeed : float;

function Start()
{
	reloadPercent = 0;
	reloadSpeed = 6;
}

function Update ()
{
	if (reloadPercent < 100)
	{
		reloadPercent += reloadSpeed;
	}
	// Fire!
	if (Input.GetKey (KeyCode.Space) && reloadPercent >= 100) {
		// make fire effect.
		Instantiate(fireEffect, spawnPoint.position, spawnPoint.rotation);
		
		// make ball
		Instantiate(bulletObject, spawnPoint.position, spawnPoint.rotation);
		startReload();
	}

}

function startReload ()
{
	reloadPercent = 0;
}