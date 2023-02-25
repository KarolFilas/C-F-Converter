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
        p.textContent = '';
    } else {
        far.textContent = '°F';
        cel.textContent = '°C';
        p.textContent = '';
    }
}

const conFaran = () => {
    let faran = 32 + 9 / 5 * input.value;
    p.textContent = `${input.value} stopni celcujsza to ${faran.toFixed(1)} stopni faranjharta`
    input.value = ''
}

const conCel = () => {
    let celc = (input.value - 32) / 2;
    p.textContent = `${input.value} stopni faranhajta to ${celc.toFixed(1)} stopni celcjusza`
    input.value = ''
}

const convert = () => {
    if (input.value !== '') {
        if (cel.textContent === '°C') {
            conFaran()
        } else {
            conCel()
        }
    } else {
        p.textContent = 'Królu złoty, nic nie wpisałeś!'

    }
}

const resets = () => {
    p.textContent = '';
    input.value = '';
}

btnChan.addEventListener('click', changeTemp)
btnConv.addEventListener('click', convert)
btnRes.addEventListener('click', resets)

