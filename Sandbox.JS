// Programmer: John Burke
// Team Member: Jack Sutton
// Bolt ID: SB E2)
// Date: 4.16.24
// Program: Hello World - Sandbox
// Program URL: https://edu.sphero.com/program/16700457/edit

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(1000);
	await delay (2);
	setSpeed(0);
}
*/
async function startProgram() {

	setMainLed({ r: 100, g: 100, b: 200 });

	await speak("wassuh cuh fanum rizz", true);

	await delay(1);

	for (var lol = 0; lol < 4; lol++) {

		setMainLed(getRandomColor());

		await Sound.Game.Coin.play(true);

		await roll((getHeading() + 90), 60, 2);

		await delay(1);

	}

}