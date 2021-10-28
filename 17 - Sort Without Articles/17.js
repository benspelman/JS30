"use strict";

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName) {
    return  bandName.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is ready");

    const DOMBandList = document.querySelector('#bands');

    DOMBandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

}, false);

let thingsToExport = {
    bands,
    strip
}

module.exports = thingsToExport;
