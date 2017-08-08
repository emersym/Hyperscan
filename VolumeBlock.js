


console.log('yup') ;

var songs = ['Ekali - Unfaith.mp3', 'Blackbear - i miss the old u.mp3', 'Felix Cartal - Drifting Away (ft. Ofelia K).mp3']

for (var i = 0; i < songs.length; i++) {
	console.log('yup') ;

	let sound      = document.createElement('audio');
	sound.id       = 'song';
	sound.controls = 'controls';
	sound.src      = songs[i];
	sound.type     = 'audio/mpeg';
	document.getElementById('volumeBlock').appendChild(sound);

	let volume = new Volume(sound) ;

	(function(volume){
		let playButton = document.createElement('button') ;
		playButton.onclick = volume.player.play() ;
		playButton.innerHTML = 'Play' ;
		document.getElementById('volumeBlock').appendChild(playButton);


		let pauseButton = document.createElement('button') ;
		pauseButton.onclick= volume.player.pause() ;
		pauseButton.innerHTML = 'Pause' ;
		document.getElementById('volumeBlock').appendChild(pauseButton);

		let input = document.createElement('input') ;
		input.type="range";
		input.min="0" 
		input.max="100" 
		input.step="1" 
		//input.oninput=volume.setVolume(input.value) ; 
		input.onchange=volume.setVolume(input.value) ; 
		document.getElementById('volumeBlock').appendChild(input);
	})(volume) ;
}
