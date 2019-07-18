import {data} from "./data";
import "./css/main.less"
import 'normalize.css'
import ClipboardJS from 'clipboard'

let div = document.createElement("div");
div.className = "container";


function desc(name, desc) {
    let d = document.createElement("div");
    d.innerHTML = `
    <div class="name">${name}</div>
    <div class="desc">${desc}</div>
    <div class="tip">
    <div>Tip : 点击符号就可以拷贝了</div>
    <div>作者: <a href="https://github.com/AJLoveChina" target="_blank">霸都丶傲天</a></div>
</div>
`;

    div.appendChild(d);
}

desc(data.name, data.desc);

function run(obj) {
    Object.keys(obj).forEach(k => {
        let listString = obj[k];

        let d = document.createElement("div");
        d.innerHTML = `<h3>${k}</h3>`

        for (let char of listString) {
            if (char.trim() === "") continue;
            let span = document.createElement("span");
            span.innerHTML = char;
            span.className = 'char';
            span.setAttribute("data-clipboard-text", char);
            d.appendChild(span);
        }
        div.appendChild(d);
    });
}

run(data.emoji);
run(data.nonemoji);
document.body.appendChild(div);


var clipboard = new ClipboardJS('.char');
let interval;
clipboard.on('success', function(e) {
    console.log("success copy");
    clearInterval(interval);

    let tip = document.getElementById("copy-tip");
    tip.style.visibility = "visible";

    interval = setTimeout(() => {
        tip.style.visibility = "hidden";
    }, 2000);
});

