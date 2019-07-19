import "./css/main.less"
import 'normalize.css'
import {copy} from "./copy";
import {render} from "./render";
import {ONCOPY} from "./listener";

render();
copy();
ONCOPY();

