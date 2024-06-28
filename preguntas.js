document.addEventListener('DOMContentLoaded', function () {
    // Define un array de preguntas con tres opciones cada una
    const preguntasYOpciones = [
        {
            pregunta: '¿Quién es Shinpei Ueno?',
            opciones: [
                { texto: 'Es el productor y músico de Korea para Tightbooth', valor: 'a' },
                { texto: 'Es un diseñador de China para la revista online Tightbooth', valor: 'b' },
                { texto: 'Es un skater profesional de Japón, filmador y creador de Tightbooth', valor: 'c' }
            ]
        },
        {
            pregunta: '¿A qué hacen referencia las texturas que presentan las Nike SB Dunk Low x Tightbooth?',
            opciones: [
                { texto: 'A los recorridos de los transportes públicos', valor: 'a' },
                { texto: 'A las señales viales', valor: 'b' },
                { texto: 'A las rejillas metálicas de las calles', valor: 'c' }
            ]
        },
        {
            pregunta: '¿Cuál fue el video de la serie Lenz (Tightbooth) que se presentó el año pasado?',
            opciones: [
                { texto: 'Lenz 2', valor: 'a' },
                { texto: 'Lenz 8', valor: 'b' },
                { texto: 'Lenz 3', valor: 'c' }
            ]
        },
        {
            pregunta: '¿Por qué sirven para patinar de noche las Nike SB Dunk Low x Tightbooth?',
            opciones: [
                { texto: 'Por los colores oscuros', valor: 'a' },
                { texto: 'Por los detalles reflectivos', valor: 'b' },
                { texto: 'Por el contraste de blanco y negro', valor: 'c' }
            ]
        }
    ];
    // Función para obtener dos elementos aleatorios de un array
    function obtenerDosElementosAleatorios(array) {
        const indices = [];
        while (indices.length < 2) {
            const randomIndex = Math.floor(Math.random() * array.length);
            if (!indices.includes(randomIndex)) {
                indices.push(randomIndex);
            }
        }
        return [array[indices[0]], array[indices[1]]];
    }

    // Función para mezclar el orden de los elementos de un array
    function mezclarArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Obtén dos preguntas aleatorias
    let seleccionadas = obtenerDosElementosAleatorios(preguntasYOpciones);

    // Mezcla el orden de las preguntas seleccionadas
    mezclarArray(seleccionadas);

    // Muestra las preguntas y opciones en la página
    const questionContainer = document.getElementById('preguntas');
    seleccionadas.forEach(item => {
        const liElem = document.createElement('li');
        liElem.className = 'mb-4';

        const preguntaElem = document.createElement('p');
        preguntaElem.className = 'font-weight-bold mb-1';
        preguntaElem.textContent = item.pregunta;
        liElem.appendChild(preguntaElem);

        const divElem = document.createElement('div');
        divElem.className = 'form-group';

        const selectElem = document.createElement('select');
        selectElem.required = true;
        selectElem.className = 'form-control';

        // Mezcla el orden de las opciones
        const opciones = [...item.opciones]; // Copia las opciones
        mezclarArray(opciones); // Mezcla el orden de las opciones

        opciones.forEach(opcion => {
            const optionElem = document.createElement('option');
            optionElem.value = opcion.valor;
            optionElem.textContent = opcion.texto;
            selectElem.appendChild(optionElem);
        });

        divElem.appendChild(selectElem);
        liElem.appendChild(divElem);
        questionContainer.appendChild(liElem);
    });
});
