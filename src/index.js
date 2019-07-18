import {data} from "./data";
import "./css/main.less"
import 'normalize.css'

let div = document.createElement("div");
div.className = "container";


function desc(name, desc) {
    let d = document.createElement("div");
    d.innerHTML = `
    <div class="name">${name}</div>
    <div class="desc">${desc}</div>
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
            d.appendChild(span);
        }
        div.appendChild(d);
    });
}

run(data.emoji);
run(data.nonemoji);


document.body.appendChild(div);
