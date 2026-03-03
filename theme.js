document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    function updateLabel() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const lightIcon = '<img src="https://img.icons8.com/?size=100&id=H3yHeysB1dxv&format=png&color=000000" alt="" class="theme-icon" />';
        const darkIcon = '<img src="https://img.icons8.com/?size=100&id=ttz0LmEuAD6m&format=png&color=000000" alt="" class="theme-icon" />';
        // When in dark mode, show the light icon (click to go light), otherwise show the dark icon
        toggle.innerHTML = isDark ? lightIcon : darkIcon;
        toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    function toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        updateLabel();
    }

    toggle.addEventListener('click', toggleTheme);
    updateLabel();
});

