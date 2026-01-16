const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('openSidebar');
const closeBtn = document.getElementById('closeSidebar');

if (sidebar && openBtn && closeBtn) {
    function openSidebarFn() {
        sidebar.classList.add('open-sidebar');
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    }

    function closeSidebarFn() {
        sidebar.classList.remove('open-sidebar');
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    }

    openBtn.addEventListener('click', openSidebarFn);
    closeBtn.addEventListener('click', closeSidebarFn);
}

const introOverlay = document.getElementById('intro-overlay');
const enterBtn = document.getElementById('enterBtn');
const siteContent = document.getElementById('site-content');

if (introOverlay && enterBtn && siteContent) {
    siteContent.classList.remove('reveal');
    enterBtn.addEventListener('click', function () {
        siteContent.classList.add('reveal');
        introOverlay.classList.add('hidden');
    });
}