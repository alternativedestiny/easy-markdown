window.onload = function () {
    let markdown = new Reader("mark");
    // console.dir(markdown);
    markdown.getHtml();
    document.getElementById("test").onclick = function () {
        let markdown = new Reader("mark");
        markdown.getHtml();
    }


}
