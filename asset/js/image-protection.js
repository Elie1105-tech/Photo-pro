// Custom Alert Functions
function showCustomAlert() {
    document.getElementById('alertOverlay').classList.add('show');
    document.getElementById('customAlert').classList.add('show');
}

function closeCustomAlert() {
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
        if (e.target.tagName === 'IMG' || 
            e.target.closest('.gallery-item') || 
            e.target.closest('.card') ||
            e.target.closest('.category-card')) {
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
    document.querySelectorAll('.gallery-item, .card, .category-card').forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });
});
