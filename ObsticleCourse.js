// Programmer: John Burke
// Team Member: Jack Sutton
// Bolt ID: SB E2F0
// Date: 4.24.2024
// Program: Obstacle Course
// Program URL:

// John Burke
async function startProgram() {
	setMainLed({ r: 100, g: 100, b: 200 });
	await speak("vroom vroom", true);
	await delay(1);
	for (var _i1 = 0; _i1 < 4; _i1++) {
		setMainLed(getRandomColor());
		await Sound.EightBit.Explosion.play(true);
		await roll((getHeading() + 0), 60, 1.9);
		await delay(1);
	}
}