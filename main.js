const Cities = [
    {
       City: 'Melbourne',
       Date: 'March 20'
    },
    {
       City: 'Sydney',
       Date: 'March 21'
    },
    {
       City: 'Solvesborg',
       Date: 'June 04'
    },
    {
       City: 'Interlaken',
       Date: 'June 12'
    },
    {
       City: 'Donington',
       Date: 'June 14'
    },
    {
       City: 'Dessel',
       Date: 'June 19'
    },
    {
       City: 'Clisson',
       Date: 'June 20'
    },
    {
       City: 'Barcelona',
       Date: 'July 03'
    },
    {
       City: 'Villafranca di Verona',
       Date: 'July 04'
    },
    {
       City: 'Vizovice',
       Date: 'July 09'
    }
];

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

const listGroupBuilder = (arr) => {
    domString = '';
    for (let i = 0; i < arr.length; i++){
    domString += `<a onClick="buyTicketAlert(${i})" class="list-group-item list-group-item-action">${arr[i].City}  <p>When: ${arr[i].Date}</p></a>`;
    }
    printToDom('list-group', domString);
};

const buyTicketAlert = (i) => {
    window.alert(`You just bought tickets to our show in ${Cities[i].City}. Thank you for your purchase.`)
};

const events = () => {
    for (let i = 0; i < Cities.length; i++){
    document.getElementById(`${i}`).addEventListener('click', buyTicketAlert)
    }
}

const init = () => {
    listGroupBuilder(Cities);
    buildConcertSection();
};

init();