document.addEventListener('DOMContentLoaded', function() {
    const themes = ['classic', 'dark', 'solarized', 'solarized-dark'];
    let currentTheme = localStorage.getItem('theme') || 'classic';

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        currentTheme = theme;
    }

    function createThemeSwitcher() {
        const nav = document.querySelector('.site-nav .trigger');
        if (!nav) return;

        const themeContainer = document.createElement('div');
        themeContainer.className = 'theme-switcher';

        const select = document.createElement('select');
        select.id = 'theme-select';
        select.title = '选择主题';

        themes.forEach(theme => {
            const option = document.createElement('option');
            option.value = theme;
            option.text = theme.charAt(0).toUpperCase() + theme.slice(1).replace('-', ' ');
            if (theme === currentTheme) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        select.addEventListener('change', (e) => {
            setTheme(e.target.value);
        });

        themeContainer.appendChild(select);
        nav.appendChild(themeContainer);
    }

    // 初始化主题
    setTheme(currentTheme);
    createThemeSwitcher();
}));