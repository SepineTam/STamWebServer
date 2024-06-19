function loadHTML(elementId, filePath) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                var container = document.getElementById(elementId);
                var baseElement = document.createElement('base');
                // 设置基路径为根目录
                baseElement.href = '/';
                container.innerHTML = this.responseText;
                container.prepend(baseElement);
            } else {
                console.error('Error loading ' + filePath + ': ' + this.status);
            }
        }
    };
    xhttp.open("GET", filePath, true);
    xhttp.send();
}
