export default async function decorate(block) {
    const scr = document.createElement('script');
    scr.onload = function() {
        console.log("Script loaded and readyyy");
    };
    scr.src="https://www.cssscript.com/demo/replicate-ios-calculator/script.js";
    block.append(scr);
    block.innerHTML = '<div class="row" style="max-height:500px;">\n' +
        '        <div class="col flex-center">\n' +
        '           <div class="main-content">\n' +
        '                <header>\n' +
        '                    <h1>iOS-like Calculator</h1>\n' +
        '                </header>\n' +
        '\n' +
        '                <main>\n' +
        '                    <p>\n' +
        '                        \n' +
        '                        <br>\n' +
        '                        <br>\n' +
        '                        \n' +
        '                        <br>\n' +
        '                        <br>\n' +
        '                        Calculator \n' +
        '                    </p>\n' +
        '                </main>\n' +
        '\n' +
        '                <hr>\n' +
        '                <section>\n' +
        '                    <h2>How to use</h2>\n' +
        '                    <ul>\n' +
        '                        <li><span>AC or C</span> &nbsp; Clear the last input</li>\n' +
        '                        <li><span>+/-</span> &nbsp; Assign the additive inverse</li>\n' +
        '                        <li><span>%</span> &nbsp; Find the 1% of the last input</li>\n' +
        '                        <li><span>÷</span> &nbsp; Division operator</li>\n' +
        '                        <li><span>x</span> &nbsp; Multiplication operator</li>\n' +
        '                        <li><span>-</span> &nbsp; Minus operator</li>\n' +
        '                        <li><span>+</span> &nbsp; Plus operator</li>\n' +
        '                        <li><span>=</span> &nbsp; Equals operator</li>\n' +
        '                    </ul>\n' +
        '                </section>\n' +
        '           </div>\n' +
        '        </div>\n' +
        '        <div class="col flex-center">\n' +
        '            <div class="calculator">\n' +
        '                <div class="screen">\n' +
        '                    0\n' +
        '                </div>\n' +
        '                <div class="keyboard">\n' +
        '                    <div class="row">\n' +
        '                        <div class="sub-col" data-button-type="operator" data-value="clear" id="clear_button">AC</div>\n' +
        '                        <div class="sub-col" data-button-type="operator" data-value="+/-">+/-</div>\n' +
        '                        <div class="sub-col" data-button-type="operator" data-value="%">%</div>\n' +
        '                        <div class="sub-col" data-button-type="operator" data-value="/">÷</div>\n' +
        '                    </div>\n' +
        '                    <div class="row">\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value="7">7</div>\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value="8">8</div>\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value="9">9</div>\n' +
        '                        <div class="sub-col" data-button-type="operator" data-value="*">x</div>\n' +
        '                    </div>\n' +
        '                    <div class="row">\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value="4">4</div>\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value="5">5</div>\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value="6">6</div>\n' +
        '                        <div class="sub-col" data-button-type="operator" data-value="-">-</div>\n' +
        '                    </div>\n' +
        '                    <div class="row">\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value="1">1</div>\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value="2">2</div>\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value="3">3</div>\n' +
        '                        <div class="sub-col" data-button-type="operator" data-value="+">+</div>\n' +
        '                    </div>\n' +
        '                    <div class="row">\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value="0">0</div>\n' +
        '                        <div class="sub-col" data-button-type="digit" data-value=".">,</div>\n' +
        '                        <div class="sub-col" data-button-type="operator" data-value="=">=</div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </div>';
}
