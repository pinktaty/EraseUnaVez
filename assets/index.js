window.addEventListener('load', () => {
	var playing = false;
	const playButton = document.querySelector(".fa-play");
	const audio = new Audio("assets/audio/Song.mp3");
	const startButton = document.querySelector(".start-button");
	const textBox = document.querySelector(".text-box");
	const text = document.querySelector(".text");
	const nextButton = document.querySelector(".next-button")
	const story = ["Érase una vez, en un exuberante bosque, en un punto indeterminado del tiempo,", "(como lo es todo realmente, ¿no es acaso la avaricia humana por el recuerdo exacto", "sólo un delirio de grandeza? Sin aprender a través del suceso pasado", "pero con la fecha exacta en los anales de la historia,", "un árbol comenzó a extender sus raíces en la tierra fértil", "y de todos los nutrientes que la vida previa a él había dejado a su paso,", "su pensamiento profundo comenzó a desarrollarse."];

	window.setTimeout(() => {
		document.querySelector(".advice-text").remove();
	}, 2000);

	playButton.addEventListener('click', () => {
		if(!playing){
			audio.play();
			playing = true;
		} else {
			audio.pause();
			playing = false;
		}
	});

	startButton.addEventListener('click', () => {
		startButton.remove();
		audio.play();
		playing = true;
		textBox.classList.add("text-box-ready");
		tellStory(0);
	});

	function tellStory(i) {
  	let message = story[i];
  	showText(message, 0, 100);
  	i++;
  	if (i < story.length) {
    	setTimeout(() => {
      		nextButton.classList.add("next-button-ready");
      		nextButton.addEventListener('click', function clickHandler() {
        			nextButton.classList.remove("next-button-ready");
        			text.innerHTML = '';
        			nextButton.removeEventListener('click', clickHandler); // Remove the event listener to prevent memory leaks
       				tellStory(i);
      			});
    		}, 8500);
  		}
	}

	function showText(message, index, interval){
  		if (index < message.length) {
   	 		text.append(message[index]);
    		setTimeout(() => {
      			showText(message, index + 1, interval);
    		}, interval);
  		}
	}
});
