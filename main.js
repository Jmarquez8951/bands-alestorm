const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildConcertSection = () => {
    let domString = '';
    domString += `<div class="section">`
    domString += `<div class="concert-text col-6">`
    domString +=    `<h4>Flogging lugger deadlights trysail cog. Pink lee brig Barbary Coast draft. Grog blossom capstan mizzenmast yard fathom. Jolly Roger marooned sutler flogging lateen sail. Lee come about hardtack dead men tell no tales Admiral of the Black. Skysail galleon Chain Shot keelhaul bounty. Aft hulk gunwalls hands fire in the hole. Blow the man down landlubber or just lubber boatswain hail-shot league. To go on account crow's nest cutlass doubloon Blimey. Privateer pinnace lateen sail Chain Shot code of conduct.</h4>`
    domString += `</div>`
    domString += `<div class="concert-image col-6">`
    domString +=    `<img src="https://live.staticflickr.com/65535/48480398492_97807f80bf_c.jpg" alt="High kicks in Dusseldorf"/>`
    domString += `</div>`

    printToDom('concerts', domString);
};

const init = () => {
    buildConcertSection();
}

init();