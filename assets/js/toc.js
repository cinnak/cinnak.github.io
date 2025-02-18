document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('post-content');
    const toc = document.getElementById('table-of-contents');
    
    if (!content || !toc) return;
    
    // 获取所有标题元素
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) return;
    
    // 生成目录
    const tocHtml = [];
    headings.forEach((heading, index) => {
        // 为每个标题添加ID
        const id = `heading-${index}`;
        heading.id = id;
        
        // 获取标题级别
        const level = parseInt(heading.tagName.charAt(1));
        
        // 创建目录项
        tocHtml.push(
            `<a href="#${id}" class="toc-level-${level}">${heading.textContent}</a>`
        );
    });
    
    // 插入目录
    toc.innerHTML = tocHtml.join('');
    
    // 添加滚动监听，高亮当前阅读的章节
    let activeLink = null;
    
    function updateActiveHeading() {
        const scrollPosition = window.scrollY;
        
        // 找到当前可见的标题
        for (let i = headings.length - 1; i >= 0; i--) {
            const heading = headings[i];
            if (heading.offsetTop <= scrollPosition + 100) {
                // 移除之前的高亮
                if (activeLink) {
                    activeLink.classList.remove('active');
                }
                
                // 添加新的高亮
                activeLink = toc.querySelector(`[href="#${heading.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
                break;
            }
        }
    }
    
    // 监听滚动事件
    window.addEventListener('scroll', updateActiveHeading);
    
    // 初始化高亮
    updateActiveHeading();
});
