const data = {
    name: `awesome-unicode-symbol`,
    desc: `非常炫酷的unicode字符, 并归类整理(所有的字符/符号都可以用于网页丶微信丶QQ丶编辑器, 因为它们就是unicode编码的一份子)`,
    emoji: {
        "最常用": "🌹🍀🍎💰📱🌙🍁🍂🍃🌷💎🔪🔫🏀⚽⚡👄👍🔥",
        "表情": "😀😁😂😃😄😅😆😉😊😋😎😍😘😗😙😚☺😇😐😑😶😏😣😥😮😯😪😫😴😌😛😜😝😒😓😔😕😲😷😖😞😟😤😢😭😦😧😨😬😰😱😳😵😡😠",
        "人物": "👦👧👨👩👴👵👶👱👮👲👳👷👸💂🎅👰👼💆💇🙍🙎🙅🙆💁🙋🙇🙌🙏👤👥🚶🏃👯💃👫👬👭💏💑👪",
        "手势": "💪👈👉☝👆👇✌✋👌👍👎✊👊👋👏👐✍",
        "日常": "👣👀👂👃👅👄💋👓👔👕👖👗👘👙👚👛👜👝🎒💼👞👟👠👡👢👑👒🎩🎓💄💅💍🌂",
        "手机": "📱📲📶📳📴☎📞📟📠",
        "公共/社会": "♻🏧🚮🚰♿🚹🚺🚻🚼🚾⚠🚸⛔🚫🚳🚭🚯🚱🚷🔞💈",
        "动物": "🙈🙉🙊🐵🐒🐶🐕🐩🐺🐱😺😸😹😻😼😽🙀😿😾🐈🐯🐅🐆🐴🐎🐮🐂🐃🐄🐷🐖🐗🐽🐏🐑🐐🐪🐫🐘🐭🐁🐀🐹🐰🐇🐻🐨🐼🐾🐔🐓🐣🐤🐥🐦🐧🐸🐊🐢🐍🐲🐉🐳🐋🐬🐟🐠🐡🐙🐚🐌🐛🐜🐝🐞🦋",
        "植物": "💐🌸💮🌹🌺🌻🌼🌷🌱🌲🌳🌴🌵🌾🌿🍀🍁🍂🍃",
        "自然": "🌍🌎🌏🌐🌑🌒🌓🌔🌕🌖🌗🌘🌙🌚🌛🌜☀🌝🌞⭐🌟🌠☁⛅☔⚡❄🔥💧🌊",
        "饮食": "🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🍒🍓🍅🍆🌽🍄🌰🍞🍖🍗🍔🍟🍕🍳🍲🍱🍘🍙🍚🍛🍜🍝🍠🍢🍣🍤🍥🍡🍦🍧🍨🍩🍪🎂🍰🍫🍬🍭🍮🍯🍼☕🍵🍶🍷🍸🍹🍺🍻🍴",
        "文体": "🎪🎭🎨🎰🚣🛀🎫🏆⚽⚾🏀🏈🏉🎾🎱🎳⛳🎣🎽🎿🏂🏄🏇🏊🚴🚵🎯🎮🎲🎷🎸🎺🎻🎬",
        "恐怖": "😈👿👹👺💀☠👻👽👾💣",
        "旅游": "🌋🗻🏠🏡🏢🏣🏤🏥🏦🏨🏩🏪🏫🏬🏭🏯🏰💒🗼🗽⛪⛲🌁🌃🌆🌇🌉🌌🎠🎡🎢🚂🚃🚄🚅🚆🚇🚈🚉🚊🚝🚞🚋🚌🚍🚎🚏🚐🚑🚒🚓🚔🚕🚖🚗🚘🚚🚛🚜🚲⛽🚨🚥🚦🚧⚓⛵🚤🚢✈💺🚁🚟🚠🚡🚀🎑🗿🛂🛃🛄🛅",
        "物品": "💌💎🔪💈🚪🚽🚿🛁⌛⏳⌚⏰🎈🎉🎊🎎🎏🎐🎀🎁📯📻📱📲☎📞📟📠🔋🔌💻💽💾💿📀🎥📺📷📹📼🔍🔎🔬🔭📡💡🔦🏮📔📕📖📗📘📙📚📓📃📜📄📰📑🔖💰💴💵💶💷💸💳✉📧📨📩📤📥📦📫📪📬📭📮✏✒📝📁📂📅📆📇📈📉📊📋📌📍📎📏📐✂🔒🔓🔏🔐🔑🔨🔫🔧🔩🔗💉💊🚬🔮🚩🎌💦💨",
        "标识/标志": "♠♥♦♣🀄🎴🔇🔈🔉🔊📢📣💤💢💬💭♨🌀🔔🔕✡✝🔯📛🔰🔱⭕✅☑✔✖❌❎➕➖➗➰➿〽✳✴❇‼⁉❓❔❕❗©®™🎦🔅🔆💯🔠🔡🔢🔣🔤🅰🆎🅱🆑🆒🆓ℹ🆔Ⓜ🆕🆖🅾🆗🅿🆘🆙🆚🈁🈂🈷🈶🈯🉐🈹🈚🈲🉑🈸🈴🈳㊗㊙🈺🈵▪▫◻◼◽◾⬛⬜🔶🔷🔸🔹🔺🔻💠🔲🔳⚪⚫🔴🔵",
        "生肖": "🐁🐂🐅🐇🐉🐍🐎🐐🐒🐓🐕🐖",
        "星座": "♈♉♊♋♌♍♎♏♐♑♒♓⛎",
        "时间/时钟/钟表": "🕛🕧🕐🕜🕑🕝🕒🕞🕓🕟🕔🕠🕕🕡🕖🕢🕗🕣🕘🕤🕙🕥🕚🕦⌛⏳⌚⏰⏱⏲🕰",
        "爱心/心形/爱情": "💘❤💓💔💕💖💗💙💚💛💜💝💞💟❣",
        "花草/植物": "💐🌸💮🌹🌺🌻🌼🌷🌱🌿🍀  🌿🍀🍁🍂🍃",
        "月亮": "🌑🌒🌓🌔🌕🌖🌗🌘🌙🌚🌛🌜🌝",
        "水果": "🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🍒🍓",
        "钱包": "💴💵💶💷💰💸💳",
        "交通": "🚂🚃🚄🚅🚆🚇🚈🚉🚊🚝🚞🚋🚌🚍🚎🚏🚐🚑🚒🚓🚔🚕🚖🚗🚘🚚🚛🚜🚲⛽🚨🚥🚦🚧⚓⛵🚣🚤🚢✈💺🚁🚟🚠🚡🚀",
        "建筑": "🏠🏡🏢🏣🏤🏥🏦🏨🏩🏪🏫🏬🏭🏯🏰💒🗼🗽⛪🌆🌇🌉",
        "办公": "📱📲☎📞📟📠🔋🔌💻💽💾💿📀🎥📺📷📹📼🔍🔎🔬🔭📡📔📕📖📗📘📙📚📓📃📜📄📰📑🔖💳✉📧📨📩📤📥📦📫📪📬📭📮✏✒📝📁📂📅📆📇📈📉📊📋📌📍📎📏📐✂🔒🔓🔏🔐🔑",
        "箭头/方向": "⬆↗➡↘⬇↙⬅↖↕↔↩↪⤴⤵🔃🔄🔙🔚🔛🔜🔝",
    },
    nonemoji: {
        "特殊符号": "♠♣♧♡♥❤❥❣♂♀✲☀☼☾☽◐◑☺☻☎☏✿❀№↑↓←→√×÷★℃℉°◆◇⊙■□△▽¿½☯✡㍿卍卐♂♀✚〓㎡♪♫♩♬㊚㊛囍㊒㊖Φ♀♂‖$@*&#※卍卐Ψ♫♬♭♩♪♯♮⌒¶∮‖€￡¥$",
        "编号序号": "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳⓪❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵",
        "数学符号": "﹢﹣×÷±/=≌∽≦≧≒﹤﹥≈≡≠=≤≥<>≮≯∷∶∫∮∝∞∧∨∑∏∪∩∈∵∴⊥∥∠⌒⊙√∟⊿㏒㏑%‰⅟½⅓⅕⅙⅛⅔⅖⅚⅜¾⅗⅝⅞⅘≂≃≄≅≆≇≈≉≊≋≌≍≎≏≐≑≒≓≔≕≖≗≘≙≚≛≜≝≞≟≠≡≢≣≤≥≦≧≨≩⊰⊱⋛⋚∫∬∭∮∯∰∱∲∳%℅‰‱øØπ",
        "爱心符号": "♥❣ღ♠♡♤❤❥",
        "标点符号": "。，、＇：∶；?‘’“”〝〞ˆˇ﹕︰﹔﹖﹑•¨….¸;！´？！～—ˉ｜‖＂〃｀@﹫¡¿﹏﹋﹌︴々﹟#﹩$﹠&﹪%*﹡﹢﹦﹤‐￣¯―﹨ˆ˜﹍﹎+=<＿_-\\ˇ~﹉﹊（）〈〉‹›﹛﹜『』〖〗［］《》〔〕{}「」【】︵︷︿︹︽_﹁﹃︻︶︸﹀︺︾ˉ﹂﹄︼❝❞",
        "单位符号": "°′″＄￥〒￠￡％＠℃℉﹩﹪‰﹫㎡㏕㎜㎝㎞㏎m³㎎㎏㏄º○¤%$º¹²³",
        "货币符号": "€£Ұ₴$₰¢₤¥₳₲₪₵元₣₱฿¤₡₮₭₩ރ円₢₥₫₦zł﷼₠₧₯₨Kčर₹ƒ₸￠",
        "箭头符号": "↑↓←→↖↗↘↙↔↕➻➼➽➸➳➺➻➴➵➶➷➹▶►▷◁◀◄«»➩➪➫➬➭➮➯➱⏎➲➾➔➘➙➚➛➜➝➞➟➠➡➢➣➤➥➦➧➨↚↛↜↝↞↟↠↠↡↢↣↤↤↥↦↧↨⇄⇅⇆⇇⇈⇉⇊⇋⇌⇍⇎⇏⇐⇑⇒⇓⇔⇖⇗⇘⇙⇜↩↪↫↬↭↮↯↰↱↲↳↴↵↶↷↸↹☇☈↼↽↾↿⇀⇁⇂⇃⇞⇟⇠⇡⇢⇣⇤⇥⇦⇧⇨⇩⇪↺↻⇚⇛♐",
        "符号图案": "✐✎✏✑✒✍✉✁✂✃✄✆✉☎☏☑✓✔√☐☒✗✘ㄨ✕✖✖☢☠☣✈★☆✡囍㍿☯☰☲☱☴☵☶☳☷☜☞☝✍☚☛☟✌♤♧♡♢♠♣♥♦☀☁☂❄☃♨웃유❖☽☾☪✿♂♀✪✯☭➳卍卐√×■◆●○◐◑✙☺☻❀⚘♔♕♖♗♘♙♚♛♜♝♞♟♧♡♂♀♠♣♥❤☜☞☎☏⊙◎☺☻☼▧▨♨◐◑↔↕▪▒◊◦▣▤▥▦▩◘◈◇♬♪♩♭♪の★☆→あぃ￡Ю〓§♤♥▶¤✲❈✿✲❈➹☀☂☁【】┱┲❣✚✪✣✤✥✦❉❥❦❧❃❂❁❀✄☪☣☢☠☭ღ▶▷◀◁☀☁☂☃☄★☆☇☈⊙☊☋☌☍ⓛⓞⓥⓔ╬『』∴☀♫♬♩♭♪☆∷﹌の★◎▶☺☻►◄▧▨♨◐◑↔↕↘▀▄█▌◦☼♪の☆→♧ぃ￡❤▒▬♦◊◦♠♣▣۰•❤•۰►◄▧▨♨◐◑↔↕▪▫☼♦⊙●○①⊕◎Θ⊙¤㊣★☆♀◆◇◣◢◥▲▼△▽⊿◤◥✐✌✍✡✓✔✕✖♂♀♥♡☜☞☎☏⊙◎☺☻►◄▧▨♨◐◑↔↕♥♡▪▫☼♦▀▄█▌▐░▒▬♦◊◘◙◦☼♠♣▣▤▥▦▩◘◙◈♫♬♪♩♭♪✄☪☣☢☠♯♩♪♫♬♭♮☎☏☪♈ºº₪¤큐«»™♂✿♥　◕‿-｡　｡◕‿◕｡",
        "希腊字母": "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζνξοπρσηθικλμτυφχψω",
        "俄语字母": "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя",
        "汉语拼音": "āáǎàōóǒòēéěèīíǐìūúǔùǖǘǚǜüêɑńňɡㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ",
        "中文字符": "零壹贰叁肆伍陆柒捌玖拾佰仟万亿吉太拍艾分厘毫微卍卐卄巜弍弎弐朤氺曱甴囍兀々〆のぁ〡〢〣〤〥〦〧〨〩㊎㊍㊌㊋㊏㊚㊛㊐㊊㊣㊤㊥㊦㊧㊨㊒㊫㊑㊓㊔㊕㊖㊗㊘㊜㊝㊞㊟㊠㊡㊢㊩㊪㊬㊭㊮㊯㊰㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉",
        "日文平假名片假名": "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷヸヹヺ・ーヽヾヿ゠ㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ",
        "制表符": "─ ━│┃╌╍╎╏┄ ┅┆┇┈ ┉┊┋┌┍┎┏┐┑┒┓└ ┕┖┗ ┘┙┚┛├┝┞┟┠┡┢┣ ┤┥┦┧┨┩┪┫┬ ┭ ┮ ┯ ┰ ┱ ┲ ┳ ┴ ┵ ┶ ┷ ┸ ┹ ┺ ┻┼ ┽ ┾ ┿ ╀ ╁ ╂ ╃ ╄ ╅ ╆ ╇ ╈ ╉ ╊ ╋ ╪ ╫ ╬═║╒╓╔ ╕╖╗╘╙╚ ╛╜╝╞╟╠ ╡╢╣╤ ╥ ╦ ╧ ╨ ╩ ╳╔ ╗╝╚ ╬ ═ ╓ ╩ ┠ ┨┯ ┷┏ ┓┗ ┛┳ ⊥ ﹃ ﹄┌ ╮ ╭ ╯╰",
        "皇冠符号": "♚　♛　♝　♞　♜　♟　♔　♕　♗　♘　♖　♟",
    }
};


export {data};
