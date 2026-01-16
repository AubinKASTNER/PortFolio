const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('openSidebar');
const closeBtn = document.getElementById('closeSidebar');
const containerWidth = document.getElementById('container');

if (sidebar && openBtn && closeBtn) {
    function openSidebarFn() {
        sidebar.classList.add('open-sidebar');
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
        containerWidth.style.marginLeft = 'var(--sidebar-width)';
    }

    function closeSidebarFn() {
        sidebar.classList.remove('open-sidebar');
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
        containerWidth.style.marginLeft = '0';
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

// Système de mot de passe
document.addEventListener('DOMContentLoaded', function() {
    const passwordOverlay = document.getElementById('password-overlay');
    const passwordInput = document.getElementById('password-input');
    const validateButton = document.getElementById('validatePassword');
    const errorMessage = document.getElementById('password-error');
    
    // Mot de passe correct (vous pouvez le changer)
    const correctPassword = 'portfolio2026';
    
    // Vérifier si le mot de passe a déjà été saisi
    if (sessionStorage.getItem('portfolioAccessGranted') === 'true') {
        passwordOverlay.classList.add('hidden');
    } else {
        passwordOverlay.classList.remove('hidden');
    }
    
    // Valider le mot de passe au clic
    validateButton.addEventListener('click', validatePassword);
    
    // Valider le mot de passe avec la touche Entrée
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            validatePassword();
        }
    });
    
    function validatePassword() {
        const enteredPassword = passwordInput.value.trim();
        
        if (enteredPassword === correctPassword) {
            // Mot de passe correct
            errorMessage.textContent = '';
            sessionStorage.setItem('portfolioAccessGranted', 'true');
            
            // Animation de transition
            passwordOverlay.style.transition = 'opacity 0.5s ease-out';
            passwordOverlay.style.opacity = '0';
            
            setTimeout(() => {
                passwordOverlay.classList.add('hidden');
            }, 500);
            
        } else {
            // Mot de passe incorrect
            errorMessage.textContent = 'Mot de passe incorrect. Veuillez réessayer.';
            passwordInput.value = '';
            passwordInput.focus();
            
            // Animation d'erreur
            passwordInput.style.animation = 'none';
            setTimeout(() => {
                passwordInput.style.animation = 'shake 0.5s';
            }, 10);
        }
    }
    
    // Animation de secousse pour le champ mot de passe
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
});
