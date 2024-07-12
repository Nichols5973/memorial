export default async function decorate(block) {
    block.innerHTML = '<div class="calculator">\n' +
        '    <div class="screen">\n' +
        '        0\n' +
        '    </div>\n' +
        '    <div class="keyboard">\n' +
        '        <div class="row">\n' +
        '            <div class="sub-col" data-button-type="operator" data-value="clear" id="clear_button">AC</div>\n' +
        '            <div class="sub-col" data-button-type="operator" data-value="+/-">+/-</div>\n' +
        '            <div class="sub-col" data-button-type="operator" data-value="%">%</div>\n' +
        '            <div class="sub-col" data-button-type="operator" data-value="/">÷</div>\n' +
        '        </div>\n' +
        '        <div class="row">\n' +
        '            <div class="sub-col" data-button-type="digit" data-value="7">7</div>\n' +
        '            <div class="sub-col" data-button-type="digit" data-value="8">8</div>\n' +
        '            <div class="sub-col" data-button-type="digit" data-value="9">9</div>\n' +
        '            <div class="sub-col" data-button-type="operator" data-value="*">x</div>\n' +
        '        </div>\n' +
        '        <div class="row">\n' +
        '            <div class="sub-col" data-button-type="digit" data-value="4">4</div>\n' +
        '            <div class="sub-col" data-button-type="digit" data-value="5">5</div>\n' +
        '            <div class="sub-col" data-button-type="digit" data-value="6">6</div>\n' +
        '            <div class="sub-col" data-button-type="operator" data-value="-">-</div>\n' +
        '        </div>\n' +
        '        <div class="row">\n' +
        '            <div class="sub-col" data-button-type="digit" data-value="1">1</div>\n' +
        '            <div class="sub-col" data-button-type="digit" data-value="2">2</div>\n' +
        '            <div class="sub-col" data-button-type="digit" data-value="3">3</div>\n' +
        '            <div class="sub-col" data-button-type="operator" data-value="+">+</div>\n' +
        '        </div>\n' +
        '        <div class="row">\n' +
        '            <div class="sub-col" data-button-type="digit" data-value="0">0</div>\n' +
        '            <div class="sub-col" data-button-type="digit" data-value=".">,</div>\n' +
        '            <div class="sub-col" data-button-type="operator" data-value="=">=</div>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>';
}
