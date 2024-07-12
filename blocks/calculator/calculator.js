export default async function decorate(block) {
    block.innerHTML = '<script>let first_number = "0";\n' +
        'let second_number = "0";\n' +
        'let result = "0";\n' +
        'let current_operator;\n' +
        'let evaluation = [];\n' +
        'const screen = document.querySelector(".screen");\n' +
        'const keyboard = document.querySelector(".keyboard");\n' +
        '\n' +
        'keyboard.addEventListener(\'click\', function(e) {\n' +
        '    e.stopImmediatePropagation()\n' +
        '    onButtonPress(e);\n' +
        '});\n' +
        '\n' +
        'function onButtonPress (e) {\n' +
        '    switch(e.target.getAttribute(\'data-button-type\')) {\n' +
        '        case "digit":\n' +
        '            AssignNumber(e)\n' +
        '            break;\n' +
        '        case "operator":\n' +
        '            AssignOperation(e)\n' +
        '            break;\n' +
        '    }\n' +
        '\n' +
        '    Render(e);\n' +
        '}\n' +
        '\n' +
        'function AssignNumber(e) {\n' +
        '\n' +
        '    if(evaluation.length <= 1) {\n' +
        '        first_number = first_number == "0" \n' +
        '            ? e.target.getAttribute("data-value")\n' +
        '            : first_number + e.target.getAttribute("data-value")\n' +
        '\n' +
        '        if(evaluation.length == 1) evaluation.shift();\n' +
        '        evaluation.push(first_number)\n' +
        '        result = first_number;\n' +
        '        return;\n' +
        '    }\n' +
        '\n' +
        '    if (evaluation.length >= 2) {\n' +
        '        second_number = second_number == "0"\n' +
        '            ? e.target.getAttribute("data-value")\n' +
        '            : second_number + e.target.getAttribute("data-value");\n' +
        '\n' +
        '        if(evaluation.length == 3) evaluation.pop();\n' +
        '        evaluation.push(second_number);\n' +
        '        result = second_number;\n' +
        '\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'function AssignOperation(e) {\n' +
        '    current_operator = e.target.getAttribute(\'data-value\');\n' +
        '\n' +
        '    // Exclusive operations that can be performed with one number, in the case of clear it can be executed even when the evaluation array is empty\n' +
        '    if(current_operator == "%" || current_operator == "+/-" || current_operator == "clear" || current_operator == "=") return Operate();\n' +
        '\n' +
        '    if(evaluation.length == 3) Operate();\n' +
        '    if(evaluation.length == 2) evaluation.pop();\n' +
        '    evaluation.splice(1, 1, current_operator);\n' +
        '}\n' +
        '\n' +
        'function Operate() { \n' +
        '    if(current_operator == "%" && evaluation.length) {\n' +
        '        let number = parseInt(evaluation[evaluation.length - 1])\n' +
        '        result =  (number / 100).toString();\n' +
        '        evaluation.splice(evaluation.length - 1, 1, result);\n' +
        '        return;\n' +
        '    }\n' +
        '\n' +
        '    if(current_operator == "+/-" && evaluation.length) {\n' +
        '        result = (evaluation[evaluation.length - 1] * -1).toString();\n' +
        '        evaluation.splice(evaluation.length - 1, 1, result);\n' +
        '        return;\n' +
        '    }\n' +
        '\n' +
        '    if(current_operator == "clear") {\n' +
        '        \n' +
        '        if(evaluation.length <= 2) {\n' +
        '            first_number = "0";\n' +
        '            evaluation = [];\n' +
        '            result = "0";\n' +
        '            return;\n' +
        '        }\n' +
        '    \n' +
        '        if(evaluation.length == 3) {\n' +
        '            second_number = "0";\n' +
        '            evaluation = [first_number.toString()]\n' +
        '            result = first_number.toString();\n' +
        '            return;\n' +
        '        }\n' +
        '\n' +
        '    }\n' +
        '\n' +
        '    if(evaluation.length == 3) {\n' +
        '        result = (eval(evaluation.join().replace(/,/g, ""))).toString();\n' +
        '        first_number = result;\n' +
        '        second_number = "0";\n' +
        '        evaluation = [first_number]\n' +
        '    }\n' +
        '}\n' +
        '\n' +
        'function Render(e) {\n' +
        '    const clear_button = document.querySelector(\'div[data-value="clear"]\');\n' +
        '\n' +
        '    let new_operator_button = e.target;\n' +
        '\n' +
        '    let last_operator_button = document.querySelector(\'.selected_operation\');\n' +
        '\n' +
        '    last_operator_button ? last_operator_button.classList.remove(\'selected_operation\') : null;\n' +
        '    new_operator_button ? new_operator_button.classList.add(\'selected_operation\') : null;\n' +
        '\n' +
        '    // change screen\'s font-size\n' +
        '    switch(result.toString().length) {\n' +
        '        case 7:\n' +
        '            screen.style.fontSize = "4.7rem"\n' +
        '            break;\n' +
        '        case 8:\n' +
        '            screen.style.fontSize = "4.1rem"\n' +
        '            break;\n' +
        '        case 9: \n' +
        '            screen.style.fontSize = "3.65rem"\n' +
        '            break\n' +
        '    }\n' +
        '\n' +
        '    if(result.toString().length > 9) {\n' +
        '        screen.textContent = parseFloat(result).toPrecision(3);\n' +
        '    } else {\n' +
        '        screen.textContent = result;\n' +
        '    }\n' +
        '\n' +
        '    evaluation.length == "0"\n' +
        '        ? clear_button.textContent = \'AC\'\n' +
        '        : clear_button.textContent = \'C\'\n' +
        '\n' +
        '    \n' +
        '}</script><div class="row">\n' +
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
