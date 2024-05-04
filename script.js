const display = document.querySelector('.display');
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.dataset.value;

        if (keyValue === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (keyValue === 'C') {
            display.value = '';
        } else {
            display.value += keyValue;
        }
    });
});