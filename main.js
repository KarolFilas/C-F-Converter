const input = document.querySelector('#converter');
const p = document.querySelector('.result');
const cel = document.querySelector('.one');
const far = document.querySelector('.two');
const btnConv = document.querySelector('.conv')
const btnRes = document.querySelector('.reset')
const btnChan = document.querySelector('.change')

const changeTemp = () => {
    if (cel.textContent === '°C') {
        cel.textContent = '°F';
        far.textContent = '°C';
    } else {
        far.textContent = '°F';
        cel.textContent = '°C';
    }
}

btnChan.addEventListener('click', changeTemp)

const convert = () => {
    if (input.value !== '') {
        if (cel.textContent === '°C') {
            let faran = 32 + 9 / 5 * input.value;
            console.log(`${input.value} stopni celcujsza to ${faran} stopni faranjharta`);
            p.textContent = `${input.value} stopni celcujsza to ${faran} stopni faranjharta`
        } else {
            let celc = (input.value - 32) / 2;
            console.log(`${input.value} stopni faranhajta to ${celc} stopni faranjharta`);
            p.textContent = `${input.value} stopni faranhajta to ${celc} stopni faranjharta`
        }
    }
}

btnConv.addEventListener('click', convert)

const resets = () => {
    p.textContent = '';
    input.value = '';
}

btnRes.addEventListener('click', resets)

