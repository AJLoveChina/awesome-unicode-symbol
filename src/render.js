import {data} from "./data";

function desc(name, desc, container) {
    let d = document.createElement("div");
    d.innerHTML = `
    <div class="name">${name}</div>
    <div class="desc">${desc}</div>
    <div class="tip">
    <div>Tip : 点击符号就可以拷贝了</div>
    <div>作者: <a href="https://github.com/AJLoveChina" target="_blank">霸都丶傲天</a></div>
</div>
`;

    container.appendChild(d);
}

function run(obj, container) {
    Object.keys(obj).forEach(k => {
        let listString = obj[k];

        let d = document.createElement("div");
        d.className = "panel";
        d.innerHTML = `<h3 class="title">${k}</h3>`

        for (let char of listString) {
            if (char.trim() === "") continue;
            let span = document.createElement("span");
            span.innerHTML = char;
            span.className = 'char';
            span.setAttribute("data-clipboard-text", char);
            d.appendChild(span);
        }
        container.appendChild(d);
    });
}

function addText(container) {
    let text = document.createElement("textarea")
    text.className = "select-symbol";

    let tip = document.createElement("h6");
    tip.innerHTML = `你选中的符号<button class="click-me-to-copy-selected">点击我复制所有已选中的符号</button>`;

    container.appendChild(tip);
    container.appendChild(text)
}

export function render() {
    let container = document.createElement("div");
    container.className = "container";

    desc(data.name, data.desc, container);
    addText(container);
    run(data.emoji, container);
    run(data.nonemoji, container);

    document.body.appendChild(container);
}
