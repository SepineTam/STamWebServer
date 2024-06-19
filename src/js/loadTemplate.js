// loadTemplate.js

document.addEventListener("DOMContentLoaded", function() {
    // 加载导航栏和页脚
    loadHTML('header', '../elements/navbar.html');
    loadHTML('footer', '../elements/footer.html');

    // 设置页面标题并加载文件列表
    var path = window.location.pathname.split('/');
    var folder = path[path.length - 2];
    document.getElementById('page-title').innerText = folder.charAt(0).toUpperCase() + folder.slice(1);

    fetchFileList(folder);
});

function fetchFileList(folder) {
    var fileList = document.getElementById('file-list');
    fetch('../' + folder)
        .then(response => response.text())
        .then(data => {
            var parser = new DOMParser();
            var doc = parser.parseFromString(data, 'text/html');
            var links = doc.querySelectorAll('a');
            links.forEach(link => {
                if (link.href.endsWith('.html') && !link.href.endsWith('index.html')) {
                    var li = document.createElement('li');
                    li.innerHTML = `<a href="${link.getAttribute('href')}">${link.textContent}</a>`;
                    fileList.appendChild(li);
                }
            });
        });
}
