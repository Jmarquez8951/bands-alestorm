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

const addCity = () => {
    console.log('in here');
}

const buttonMaker = () => {
    for (let i = 0; i < Cities.length; i++){
    document.getElementById(`${i}`).addEventListener('click', buyTicketAlert);
    }
};

const events = () => {
    document.getElementById('city-submit').addEventListener('click', addCity);
}

const init = () => {
    listGroupBuilder(Cities);
    events();
};

init();