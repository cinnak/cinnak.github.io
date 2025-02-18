document.addEventListener('DOMContentLoaded', function() {
    let currentTheme = localStorage.getItem('theme') || 'light';

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        currentTheme = theme;
    }

    const themeSelect = document.querySelector('#theme-switcher');
    if (themeSelect) {
        // 设置当前主题为选中项
        const currentOption = themeSelect.querySelector(`option[value="${currentTheme}"]`);
        if (currentOption) {
            currentOption.selected = true;
        }

        // 添加主题切换事件监听
        themeSelect.addEventListener('change', (e) => {
            setTheme(e.target.value);
        });
    }

    // 初始化主题
    setTheme(currentTheme);
})