document.addEventListener('DOMContentLoaded', function() {
    // Modal Logic (Existing)
    const projects = document.querySelectorAll('.project');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    projects.forEach(project => {
        project.addEventListener('click', function() {
            const modalId = this.dataset.modal;
            const modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    // Tooltip Logic (New)
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const tooltip = this.querySelector('::after');
            const linkRect = this.getBoundingClientRect();
            const tooltipRect = tooltip.getBoundingClientRect();

            if (linkRect.top - tooltipRect.height < 0) {
                tooltip.style.top = linkRect.bottom + 10 + 'px';
                tooltip.style.bottom = 'auto';
            } else {
                tooltip.style.bottom = '110%';
                tooltip.style.top = 'auto';
            }
        });
    });
});