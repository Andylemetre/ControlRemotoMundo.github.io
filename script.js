/**
 * script.js
 * Contiene toda la lógica y funcionalidad de la aplicación
 */

// ============================================
// FUNCIONES PRINCIPALES DEL MODAL
// ============================================

/**
 * Muestra la información de un botón en el modal
 * @param {string} buttonId - ID del botón a mostrar
 */
function showInfo(buttonId) {
    const info = buttonInfo[buttonId];

    if (!info) {
        console.error(`No se encontró información para el botón: ${buttonId}`);
        return;
    }

    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div class="info-icon">${info.icon}</div>
        <h2>${info.title}</h2>
        <p>${info.description}</p>
    `;

    openModal();
}

/**
 * Abre el modal
 */
function openModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.classList.add('active');

    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
}

/**
 * Cierra el modal
 * @param {Event} event - Evento del click (opcional)
 */
function closeModal(event) {
    // Si se pasó un evento, verificar que fue en el overlay o botón cerrar
    if (event && event.target.id !== 'modalOverlay' && !event.target.classList.contains('close-btn')) {
        return;
    }

    const modalOverlay = document.getElementById('modalOverlay');
    modalOverlay.classList.remove('active');

    // Restaurar scroll del body
    document.body.style.overflow = '';
}

// ============================================
// NAVEGACIÓN ENTRE PÁGINAS
// ============================================

/**
 * Cambia entre diferentes páginas de la aplicación
 * @param {string} pageId - ID de la página a mostrar
 */
function changePage(pageId) {
    // Ocultar todas las páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Mapeo de IDs de página a elementos HTML
    const pageMap = {
        'remote': 'remotePage',
        'telecom': 'telecomPage',
        'fiber': 'fiberPage',
        'care': 'carePage'
    };

    // Mostrar la página seleccionada
    const pageElementId = pageMap[pageId];
    const pageElement = document.getElementById(pageElementId);

    if (pageElement) {
        pageElement.classList.add('active');
        updateHeader(pageId);
        scrollToTop();
    } else {
        console.error(`No se encontró la página: ${pageId}`);
    }
}

/**
 * Actualiza el título y subtítulo del header según la página
 * @param {string} pageId - ID de la página actual
 */
function updateHeader(pageId) {
    const titles = {
        'remote': '📺 Guía del Control Remoto Mundo',
        'telecom': '🌐 Telecomunicaciones',
        'fiber': '💡 Fibra Óptica',
        'care': '🛡️ Cuidado de Equipos'
    };

    const subtitles = {
        'remote': 'Haz clic en cualquier botón para conocer su función',
        'telecom': 'Aprende sobre las comunicaciones modernas',
        'fiber': 'Tecnología de alta velocidad que ofrece Mundo con mucho cariño',
        'care': 'Mantén tus dispositivos en perfecto estado'
    };

    const titleElement = document.getElementById('mainTitle');
    const subtitleElement = document.getElementById('mainSubtitle');

    if (titleElement && titles[pageId]) {
        titleElement.textContent = titles[pageId];
    }

    if (subtitleElement && subtitles[pageId]) {
        subtitleElement.textContent = subtitles[pageId];
    }
}

/**
 * Hace scroll suave hacia arriba de la página
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// EVENT LISTENERS
// ============================================

/**
 * Inicializa los event listeners cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', function () {
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    // Prevenir el cierre del modal al hacer click dentro del contenido
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    }

    console.log('✅ Aplicación iniciada correctamente');
});

// ============================================
// UTILIDADES
// ============================================

/**
 * Muestra un mensaje temporal en la consola (útil para debug)
 * @param {string} message - Mensaje a mostrar
 */
function debugLog(message) {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(`[DEBUG] ${message}`);
    }
}

/**
 * Valida si un elemento existe en el DOM
 * @param {string} elementId - ID del elemento
 * @returns {boolean} - True si existe, false si no
 */
function elementExists(elementId) {
    return document.getElementById(elementId) !== null;
}

// ============================================
// MANEJO DE ERRORES GLOBAL
// ============================================

window.addEventListener('error', function (event) {
    console.error('Error detectado:', event.error);
    // Aquí podrías agregar lógica para reportar errores
});

// ============================================
// ANALYTICS (OPCIONAL)
// ============================================

/**
 * Registra eventos de interacción (para análisis futuro)
 * @param {string} action - Tipo de acción
 * @param {string} label - Etiqueta del evento
 */
function trackEvent(action, label) {
    debugLog(`Evento: ${action} - ${label}`);

    // Aquí podrías integrar Google Analytics o similar
    // Ejemplo: gtag('event', action, { 'event_label': label });
}

// Registrar clics en botones del control
document.addEventListener('click', function (event) {
    if (event.target.closest('.btn')) {
        const buttonElement = event.target.closest('.btn');
        trackEvent('button_click', buttonElement.className);
    }
});