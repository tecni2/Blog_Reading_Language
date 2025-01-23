/**
 * Función para alternar el menú en dispositivos móviles.
 */
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    /**
     * Evento para resaltar palabras seleccionadas con el mouse o toque.
     */
    document.body.addEventListener('mouseup', handleSelection);
    document.body.addEventListener('touchend', handleSelection);

    /**
     * Evento para agregar palabras resaltadas a la lista de estudio al hacer clic derecho o toque prolongado.
     */
    document.body.addEventListener('contextmenu', handleContextMenu);
    document.body.addEventListener('touchstart', handleTouchStart);
});

/**
 * Maneja la selección de texto para resaltar palabras.
 */
function handleSelection() {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        if (selectedText.length > 0) {
            const span = document.createElement('span');
            span.className = 'highlight';
            span.textContent = selectedText;
            range.deleteContents();
            range.insertNode(span);
        }
    }
}

/**
 * Maneja el menú contextual para agregar palabras a la lista de estudio.
 */
function handleContextMenu(event) {
    event.preventDefault();
    if (event.target.classList.contains('highlight')) {
        const studyContainer = document.getElementById('study-container');
        const word = event.target.textContent;
        const listItem = document.createElement('li');
        listItem.textContent = word;
        studyContainer.appendChild(listItem);
    }
}
