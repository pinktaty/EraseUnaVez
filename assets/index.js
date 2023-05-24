window.addEventListener('load', () => {
	var playing = false;
	const playButton = document.querySelector(".fa-play");
	const audio = new Audio("assets/audio/Song.mp3");
	const startButton = document.querySelector(".start-button");
	const textBox = document.querySelector(".text-box");
	const text = document.querySelector(".text");
	const nextButton = document.querySelector(".next-button")
	const story = ["Érase una vez, en un exuberante bosque, en un punto indeterminado del tiempo, (como lo es todo realmente,", "¿No es acaso la avaricia humana por el recuerdo exacto sólo un delirio de grandeza?", "Sin aprender a través del suceso pasado, pero con la fecha exacta apuntada en el cuaderno),", "un árbol comenzó a extender sus raíces en la fértil tierra", "y de todos los nutrientes que la vida previa a él había dejado a su paso,", "su pensamiento profundo comenzó a desarrollarse.", "Observó el nacimiento y también la muerte, la desesperación y el comfort de la alegría,", "la terquedad del deseo y la insipidez de la resignación.", "Mientras más contemplaba con su habilidad de espectador,", "más los patrones de la naturaleza se revelaban frente a él.", "Esa era la ventaja de la inmovilidad, pensó una vez mientras una ardilla,", "bajo el arbusto contiguo, aseguraba su supervivencia para la siguiente temporada;", "hace de espantar a la quebradiza verdad una imposibilidad.", "Incontables fases lunares pasaron y con ellas,", "la certidumbre de la comprensión se posó sobre el árbol como un gustoso cálido rayo de sol.", "Las cosas sucedían alrededor de él y su lógica podía ver a través de ellas para darles un sentido.", "Hasta que una vez, mientras los pájaros cantaban en sus hojas", "y las lombrices fertilizaban su alimento, un hombre llegó a sentarse contra su tronco.", "Dicho avistamiento no era el primero, (ni mucho menos el último),", "conocía a esas criaturas de la misma forma que conocía al mundo.", "Vió pueblos proclamarse gloriosos para caer en silencio, e intenciones ocultas triunfar como noblezas.", "Vió sangre y acuerdos, esperanza y venganza, rencor y justicia.", "El hombre sacó un libro, un literato con seguridad;", "un apasionado de las letras que filtra su fugaz percepción en símbolos inventados.", "Lo que sí fue inusual, (pero eso pasa en cualquier situación realmente,", "la probabilidad de situaciones inusuales, por más mínima que sea, sigue siendo posibilidad),", "fue escuchar el contenido de los papeles.", "\"La belleza es el esplendor de la verdad.\"", "Gracioso. Palabras que como siempre incitan a la grandeza, en este caso, de la verdad.", "De la verdad, ¡Que cosa más cómica! ¿No saben todos", "que la verdad no es más que una suerte de coincidencias sin significado?", "¿Qué hay de grandeza en ser el corolario?", "El árbol simplemente se deleitó ante la idea y continuo su estado de meditación.", "Pocos soles después, (he de defender esta expresión, si pueden ser lunas también pueden ser soles),", "el hombre regresó. Se sentó en el mismo lugar que la vez anterior,", "y retomó su lectura sin temor a ser escuchado.", "Sólo que ésta vez las ideas eran diferentes.", "Una vida donde otros existían dónde ahora él existe; y ellos ya no.", "Pensar en un antes de sí mismo era extraño.", "Era lógicamente correcto, pero de alguna forma irreal.", "Escuchar al hombre hablar de un tiempo en el que otros árboles y otras formas de tierra", "y ambientes eran dónde él ahora es era tétrico. Se dejó olvidar.", "Vida nueva para algunos, vida disminuida para otros. El hombre volvió,", "y con él otra de sus extrañas nociones. Ahora se hablaba de una materia con la que estaba familiarizado.", "Insectos. Insectos como las hormigas que suelen recorrer sus surcos,", "o los escarabajos que han acabado con tantos de sus compañeros a través de las estaciones,", "(sin embargo nunca con él, su resiliencia demostrada).", "Su confianza le traicionó nuevamente.", "Un científico aseguraba que el lugar donde los insectos tienen el corazón", "no es en el mismo en el que había visto perecer a tantas bestias al ser perforadas: el pecho.", "Sino en la espalda, de forma alargada.", "Nunca había visto a un insecto por dentro, así que no tenía manera de refutarlo.", "Se preguntó si él tenía corazón y de qué forma sería.", "A partir de ese momento no pudo evitar sino sentir curiosidad ante las barbaridades que el hombre recitaba.", "Diversos temas de diversa índole le entretuvieron durante horas;", "a todos inteligentemente les lograba encontrar una falla,", "una pieza que no encajaba en el gran puzzle del todo.", "Hasta que la duda ante la duda comenzó. ¿Y si su puzzle estaba mal?", "¿Y si sin darse cuenta, estaba forzando a las piezas a encajar?", "¿Y si la imagen que estaba armando no era la que los demás también construían a través de la dialéctica?", "Pánico.", "Y entonces un libro de cubierta verde llegó para levantarlo del lugar en el que su existencia había perdurado", "y hacerlo dirigir la mirada hacia sí mismo y a los otros al mismo tiempo.", "El hombre un día, mientras leía de un tipo de árbol del cuál nunca había escuchado,", "con la confianza de las tantas tardes compartidas, se volteó hacía él y le dijo:", "\"Como tú.\"", "A primera vista el dato parecía no tener sentido.", "Pero la conexión fue tomando forma al paso de su razonamiento.", "¡Imaginar que ni siquiera su conocimiento sobre sí mismo era pleno!", "¡Había más árboles como él!", "La refunfuña de dicho descubrimiento fue motivo de molestia por días;", "dejó de percibir oscuridad de luz por estar analizando posibles escenarios.", "Hasta que volvió a ver al hombre acercarse con otro libro bajo el brazo.", "Se dió cuenta que tenía que ser sincero;", "en defensa de la verdad estar molesto era lo más novedoso que le había ocurrido en mucho tiempo.", "Su paz de la que se sentía tan orgulloso, había sido también su motivo de ceguera.", "El árbol sintió vergüenza. ¡Qué emoción tan curiosa!", "Y entonces comenzó a escuchar, a descubrir y a disfrutar la vida de una forma que nunca lo había hecho.", "El árbol finalmente se podía decir sabio.", "..........................................................................", "Un escrito de mí, Lilith, para ti, Santiago.", "Felices 21 años.", "Destruye, crea, descubre, innova."];

	window.setTimeout(() => {
		document.querySelector(".advice-text").remove();
	}, 3000);

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
		let time = calculateTime(message.length);
  		showText(message, 0, 50);
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
    		}, time);
  		}
	}

	function calculateTime(length){
		if(length < 54){
			return 3600;
		}
		if(length > 80){
			return 6000;
		}
		return 4500;
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
