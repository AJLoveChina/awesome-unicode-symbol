import {events} from "./common";


export function ONCOPY() {
    window.addEventListener(events.COPY_TEXT, ev => {

        let textarea = document.querySelector(".select-symbol");
        let button = document.querySelector(".click-me-to-copy-selected");

        let text = ev.detail;
        if (textarea.value.indexOf(text) !== -1) {
            textarea.value = textarea.value.replace(text, "");
        } else {
            textarea.value += text;
        }

        if (textarea.value) {
            button.style.visibility = 'visible';
            button.setAttribute("data-clipboard-text", textarea.value);
        } else {
            button.style.visibility = 'hidden';
        }
    })
}
