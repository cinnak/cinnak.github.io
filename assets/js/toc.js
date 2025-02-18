document.addEventListener('DOMContentLoaded', function() {
    const content = document.querySelector('.post-content');
    const toc = document.getElementById('table-of-contents');
    
    if (!content || !toc) {
        console.log('TOC elements not found');
        return;
    }
    
    // 获取所有标题元素
    const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) {
        console.log('No headings found in content');
        toc.innerHTML = '<p>No contents available</p>';
        return;
    }
    
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
    toc.innerHTML = tocHtml.join('\n');
    
    // 添加滚动监听，高亮当前阅读的章节
    let activeLink = null;
    
    function updateActiveHeading() {
        const scrollPosition = window.scrollY;
        
        // 找到当前可见的标题
        for (let i = headings.length - 1; i >= 0; i--) {
            const heading = headings[i];
            const headingTop = heading.getBoundingClientRect().top + window.scrollY;
            
            if (headingTop <= scrollPosition + 100) {
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
    
    // 使用防抖处理滚动事件
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveHeading, 100);
    });
    
    // 初始化高亮
    updateActiveHeading();
}));
