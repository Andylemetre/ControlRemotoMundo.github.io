/**
 * data.js
 * Contiene toda la información de los botones del control remoto
 */

const buttonInfo = {
    // BOTONES DE ENCENDIDO
    tv: {
        icon: '📺',
        title: 'Botón Power TV',
        description: 'Este botón enciende y apaga tu televisor. Presiona una vez para encender el TV y otra vez para apagarlo. Es útil cuando quieres controlar el televisor directamente sin afectar el decodificador. <br><br><strong>⚠️ IMPORTANTE:</strong> Este botón solo funciona si el control está VINCULADO al televisor, de lo contrario NO SERVIRÁ. No es recomendable vincularlo!'
    },

    box: {
        icon: '📡',
        title: 'Botón Power Box',
        description: 'Controla el encendido y apagado del decodificador. Este botón es independiente del televisor, permitiéndote apagar el decodificador mientras mantienes el TV encendido para otras funciones.'
    },

    // BOTONES SUPERIORES
    apps: {
        icon: '⊞',
        title: 'Botón de Aplicaciones',
        description: 'Abre el menú de aplicaciones instaladas en tu decodificador. Desde aquí puedes acceder a todas las apps disponibles como YouTube, HBO y servicios de streaming adicionales.'
    },

    voice: {
        icon: '🎤',
        title: 'Asistente de Voz',
        description: 'Activa el control por voz. Mantén presionado este botón y habla para buscar contenido, cambiar canales, abrir apps o hacer preguntas.<br><br><strong>Ejemplos:</strong><br>• "Buscar películas de acción"<br>• "Abrir Netflix"<br>• "Canal 11"'
    },

    settings: {
        icon: '⚙️',
        title: 'Configuración',
        description: 'Accede al menú de configuración del sistema. Aquí puedes ajustar opciones como idioma, red WiFi, calidad de imagen, sonido, controles parentales y otras preferencias del dispositivo.'
    },

    // BOTÓN OK
    ok: {
        icon: '✓',
        title: 'Botón OK/Enter',
        description: 'Confirma la selección actual o ejecuta la opción destacada en el menú. También funciona como botón de pausa/reproducción en algunos contenidos. Es el botón principal para confirmar acciones. ⚠️ Si mantienes el botón presionado, puede abrir opciones adicionales. Se desplega una ventana en donte puedes elegir como: grabar, elegir Canales mediante grilla antigua, agregar a favoritos, entre otras opciones.'
    },

    // BOTONES CARDINALES (Navegación direccional)
    up: {
        icon: '⬆️',
        title: 'Botón Arriba',
        description: 'Navega hacia arriba en los menús y listas. Utiliza este botón para:<br><br>• Moverte por las opciones del menú<br>• Desplazarte entre canales en la guía<br>• Moverte hacia arriba en listas de contenido<br>• Explorar categorías superiores'
    },

    down: {
        icon: '⬇️',
        title: 'Botón Abajo',
        description: 'Navega hacia abajo en los menús y listas. Úsalo para:<br><br>• Desplazarte por las opciones del menú<br>• Explorar canales en la guía<br>• Moverte hacia abajo en listas de películas y series<br>• Acceder a más opciones'
    },

    left: {
        icon: '⬅️',
        title: 'Botón Izquierda',
        description: 'Navega hacia la izquierda en los menús horizontales. Utiliza este botón para:<br><br>• Moverte entre categorías<br>• Retroceder en el tiempo de reproducción (rewind)<br>• Desplazarte por opciones horizontales<br>• Regresar a secciones anteriores'
    },

    right: {
        icon: '➡️',
        title: 'Botón Derecha',
        description: 'Navega hacia la derecha en los menús horizontales. Úsalo para:<br><br>• Avanzar entre categorías<br>• Adelantar el tiempo de reproducción (fast forward)<br>• Explorar opciones hacia la derecha<br>• Acceder la grilla de canales en vivo'
    },

    // NAVEGACIÓN ADICIONAL
    back: {
        icon: '←',
        title: 'Botón Regresar',
        description: 'Retrocede a la pantalla anterior o cierra el menú actual. Además, sirve para abrir y cerrar el menú de canales grafico. Útil para navegar hacia atrás en los menús o salir de aplicaciones sin cerrarlas completamente.'
    },

    guide: {
        icon: '📺',
        title: 'Guía de Programación',
        description: 'Abre el menú de aplicaciones. Este botón te permite acceder rápidamente a todas las apps instaladas en tu decodificador.'
    },

    home: {
        icon: '🏠',
        title: 'Botón Inicio',
        description: 'Te lleva directamente a la pantalla principal del sistema. Es útil para regresar rápidamente al inicio sin importar dónde estés. Es la casa en donde se alojan todas las aplicaciones.'
    },

    // CONTROLES DE AUDIO
    volume: {
        icon: '🔊',
        title: 'Control de Volumen',
        description: '<strong>Botón + (arriba):</strong> Aumenta el volumen del decodificador.<br><br><strong>Botón − (abajo):</strong> Disminuye el volumen.<br><br>Presiona repetidamente para ajustar el nivel de sonido a tu preferencia.'
    },

    mute: {
        icon: '🔇',
        title: 'Botón Silencio (Mute)',
        description: 'Silencia instantáneamente el audio del decodificador. Presiona una vez para silenciar el sonido y vuelve a presionar para restaurar el volumen al nivel anterior.<br><br>Es útil para silenciar rápidamente el TV durante comerciales o llamadas telefónicas.'
    },

    // CONTROL DE CANALES
    channel: {
        icon: '📺',
        title: 'Cambio de Canal',
        description: '<strong>Botón ∧ (arriba):</strong> Sube al siguiente canal.<br><br><strong>Botón ∨ (abajo):</strong> Baja al canal anterior.<br><br>Usa estos botones para navegar secuencialmente por los canales disponibles en tu servicio.'
    },

    // APLICACIONES DE ACCESO DIRECTO
    youtube: {
        icon: '▶️',
        title: 'Acceso Directo YouTube',
        description: 'Abre directamente la aplicación de YouTube. Con un solo toque accedes a todo el contenido de YouTube sin necesidad de buscar la app en el menú de aplicaciones.<br><br>Perfecto para ver videos, tutoriales, música y más.'
    },

    netflix: {
        icon: '🎬',
        title: 'Acceso Directo Netflix',
        description: 'Lanza instantáneamente la aplicación de Netflix. Accede directamente a tus series y películas favoritas con un solo botón, sin navegar por menús.<br><br>Disfruta de contenido exclusivo de Netflix al instante.'
    },

    prime: {
        icon: '📹',
        title: 'Acceso Directo Prime Video',
        description: 'Abre la aplicación de Amazon Prime Video directamente. Disfruta de contenido exclusivo de Prime con acceso inmediato desde tu control remoto.<br><br>Series, películas y contenido original de Amazon.'
    },

    mundo: {
        icon: '🌎',
        title: 'Acceso Directo Mundo GO',
        description: 'Botón de acceso rápido a Mundo GO, tu servicio de canales de TV favoritos. Es un acceso directo a tus canales de Mundo.<br><br>¡Disfrútalo al máximo! 🎉'
    }
};

// Exportar para uso en otros archivos (si se usa módulos)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { buttonInfo };
}