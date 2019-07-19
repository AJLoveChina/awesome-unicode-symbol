import ClipboardJS from "clipboard";
import {events} from "./common";

function dispath(text) {
    window.dispatchEvent(new CustomEvent(events.COPY_TEXT, {
        detail: text
    }))
}

function showTip() {
    let tip = document.getElementById("copy-tip");
    tip.style.visibility = "visible";
}

function hideTip() {
    let tip = document.getElementById("copy-tip");
    return setTimeout(() => {
        tip.style.visibility = "hidden";
    }, 2000);
}

function toggleSpan(span) {
    span.style.boxShadow = '#484646 2px 2px 10px';


    setTimeout(() => {
        span.style.boxShadow = 'none';
    }, 200);
}

export function copy() {
    var clipboard = new ClipboardJS('.char');
    let copyAllSelected = new ClipboardJS('.click-me-to-copy-selected');

    let interval;
    copyAllSelected.on("success", (e) => {
        console.log("success copy");
        clearInterval(interval);
        showTip();
        interval = hideTip();
    });

    clipboard.on('success', function(e) {
        console.log("success copy");
        clearInterval(interval);
        let span = e.trigger;
        let textCopy = e.text;
        dispath(textCopy);

        showTip();
        toggleSpan(span);
        interval = hideTip();
    });

}
