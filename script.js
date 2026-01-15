// Sélectionne l'élément HTML de la sidebar par son ID
const sidebar = document.getElementById('sidebar');
// Sélectionne le bouton d'ouverture par son ID
const openBtn = document.getElementById('openSidebar');
// Sélectionne le bouton de fermeture par son ID
const closeBtn = document.getElementById('closeSidebar');

// Fonction appelée pour ouvrir la sidebar
function openSidebarFn() {
    // Ajoute la classe 'open-sidebar' qui déclenche l'animation CSS (translateX(0))
    sidebar.classList.add('open-sidebar');
    // Cache le bouton d'ouverture car le menu est ouvert
    openBtn.style.display = 'none';
    // Affiche le bouton de fermeture à l'intérieur du menu
    closeBtn.style.display = 'block';
}

// Fonction appelée pour fermer la sidebar
function closeSidebarFn() {
    // Retire la classe 'open-sidebar', ce qui remet le menu hors écran (translateX(-100%))
    sidebar.classList.remove('open-sidebar');
    // Réaffiche le bouton d'ouverture
    openBtn.style.display = 'block';
    // Cache le bouton de fermeture
    closeBtn.style.display = 'none';
}

// Ajoute un écouteur d'événement 'click' sur le bouton ouvrir pour lancer openSidebarFn
openBtn.addEventListener('click', openSidebarFn);
// Ajoute un écouteur d'événement 'click' sur le bouton fermer pour lancer closeSidebarFn
closeBtn.addEventListener('click', closeSidebarFn);
