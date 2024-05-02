// Programmer: John Burke
// Team Member: Jack Sutton
// Bolt ID: SB E2
// Date: 4.16.24
// Program: Maze Competition
// Program URL: https://edu.sphero.com/program/16788347/edit

async function startProgram() {
	// Programmer: John Burke - Start Text & Audtio Checkpoint Commit - Date:5/1/24
	await speak("Start", true);
	await scrollMatrixText("Start", { r: 90, g: 255, b: 90 }, 30, true);

	// Programmer: Jack Sutton - Blue LED Checkpoint Commit - Date:5/1/2024
	await roll((getHeading() + 0), 60, 2.65);
	setMainLed({ r: 0, g: 0, b: 300});		
	
	
	// Programmer: John Burke - Sound One Checkpoint Commit - Date: 5/1/2024
	await delay(1);
	await roll((getHeading() + 90), 60, 1.7);
	await Sound.EightBit.Explosion.play(true);
	

	
	// Programmer: Jack Sutton  - RED LED Checkpoint Commit - Date: 5/2/2024
	await delay(1);
	await roll((getHeading() + 90), 60, 1.3);
	await delay(1);
	await roll((getHeading() + 45), 60, 1.1);
	setMainLed({ r: 300, g: 0, b: 0});
	
	
	
	// Programmer: John Burke - Sound Two Checkpoint Commit - Date:	5/2/2024
	await delay(1);
	await roll((getHeading() - 90), 60, 0.55);
	await delay(1);
	await roll((getHeading() - 90), 60, 1.3);
	await delay(1);
	await roll((getHeading() + 90), 60, 0.55);
	await Sound.EightBit.Fall.play(true);
	
	
	// Programmer:             - Green LED Checkpoint Commit - Date:
	
	
	
	// Programmer:             - Purple LED & Sound Three Checkpoint Commit - Date:
	
	
	
	// Programmer:             - Start Text & Audtio Checkpoint Commit - Date:	

}