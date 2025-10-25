// Custom Alert Functions
function showCustomAlert() {
    document.body.classList.add('custom-alert-open');
    document.getElementById('alertOverlay').classList.add('show');
    document.getElementById('customAlert').classList.add('show');
}

function closeCustomAlert() {
    document.body.classList.remove('custom-alert-open');
    document.getElementById('alertOverlay').classList.remove('show');
    document.getElementById('customAlert').classList.remove('show');
}

// Initialize image protection
document.addEventListener('DOMContentLoaded', function() {
    // Close alert when clicking overlay
    const overlay = document.getElementById('alertOverlay');
    if (overlay) {
        overlay.addEventListener('click', closeCustomAlert);
    }

    // Image protection - Right click
    document.addEventListener('contextmenu', (e) => {
        // Check if click is on image or inside gallery/card container
        // But allow right-click on order buttons
        if (e.target.classList.contains('btn-order') || e.target.closest('.btn-order')) {
            return; // Allow right-click on order buttons
        }

        if (e.target.tagName === 'IMG' || 
            e.target.closest('.gallery-item') || 
            e.target.closest('.card') ||
            e.target.closest('.category-card') ||
            e.target.closest('.tableau-card') ||
            e.target.closest('.workshop-card')) {
            e.preventDefault();
            showCustomAlert();
        }
    });

    // Prevent drag and drop on images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });

    // Prevent drag on gallery items
    document.querySelectorAll('.gallery-item, .category-card, .tableau-card, .workshop-card').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });

    // Prevent keyboard shortcuts for saving
    document.addEventListener('keydown', (e) => {
        // Block Ctrl+S, Ctrl+Shift+S
        if ((e.ctrlKey && e.key === 's') || (e.ctrlKey && e.shiftKey && e.key === 's')) {
            e.preventDefault();
            return false;
        }
        // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
        if (e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
            return false;
        }
    });
});
