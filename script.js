const pressed = [];
const secretCode = 'arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba';
let secretNumber = 5;

window.addEventListener('keyup', (e) => {
    pressed.push(e.key)
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
    if (pressed.join('').toLocaleLowerCase().includes(secretCode)) {
      console.log('KONAMI CODE');
      cornify_add();
    }
})

module.exports = secretCode;