// Merch Array for merch page
const merch = [ 
    {
        title: 'Captain Morgan\'s Revenge',
        imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/2/12555_alestorm_captain_morgan_s_revenge_cd_folk_metal_napalm_records_.jpg',
        type: 'cd',
        tracks: ['"Over the Seas"', '"Captain Morgan\'s Revenge"', '"The Huntmaster"', '"Nancy the Tavern Wench"', '"Death Before the Mast"', '"Terror on the High Seas"'],
        onSale: false,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.',
    },
    {
        title: 'Black Sails at Midnight',
        imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/3/13704_alestorm_black_sails_at_midnight_cd_pirate_metal_napalm_records_1.jpg',
        type: 'cd',
        tracks: ['"The Quest" (Christopher Bowes)', '"Leviathan" (Bowes)', '"That Famous Ol\' Spiced"', '"Keelhauled"', '"To the End of Our Days"', '"Black Sails at Midnight"'],
        onSale: false,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm Kilt',
        imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/9/59121-1_alestorm_green_tartan_kilt_napalm_records.jpg',
        type: 'clothing',
        onSale: true,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm Hoodie',
        imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/3/53746-1_alestorm_pirate_pizza_party_zip_hoodie_napalm_records.jpg',
        type: 'clothing',
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm T-shirt',
        imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/0/50348_alestorm_25_years_napalm_records_t-shirt_napalm_records.jpg',
        type: 'clothing',
        onSale: false,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm T-shirt',
        imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/7/27241_alestorm_banana_duck_girlie_shirt_napalm_records.jpg',
        type: 'clothing',
        onSale: false,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm Beanie',
        imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/3/1/31419_alestorm_red_logo_beanie_napalm_records.jpg',
        type: 'clothing',
        onSale: false,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Curse of the Crystal Coconut',
        imgUrl: 'https://images.unsplash.com/photo-1554444510-592779e6e009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
        type: 'cd',
        tracks: ['"The Coconut Calls"', '"Tales from the Coconut Crypt"', '"Old Man River (cover)"', '"Why\'s the Rum Gone?"', '"You Drive me Coco-nutty"', '"Nutella"'],
        onSale: true,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm Tank Top',
        imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/4/4/44537-2_alestorm_pirate_pizza_party_girlie_tank_top_napalm_records.jpg',
        type: 'clothing',
        onSale: true,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    }
    ];

// Cities Array for Concerts Page
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

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

// PRINT TO DOM FUCTION
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// building MERCH cards for MERCH PAGE
const merchCards = (divId, arr) => {
    let domString = '';
    for (let i = 0; i <arr.length; i++) {
        domString += '<div class="col-md-4 col-lg-4 my-3">';
        domString += '  <div class="card">';
        domString += `      <h3 class="card-title p-2 text-center">${arr[i].title}</h3>`;
        domString += '      <div class="card-body">';
        domString += `          <img class="card-img-top merch-img-cards" src="${arr[i].imgUrl}" alt="merch image">`;
        if (arr[i].type === 'cd') { /* write func to put tracks in domString instead of descrip */
           domString += `<p class="card-text p-2">Track List: 1. ${arr[i].tracks[0]}, 2. ${arr[i].tracks[1]}, 3. ${arr[i].tracks[2]}, 4. ${arr[i].tracks[3]}, 5. ${arr[i].tracks[4]}, 6. ${arr[i].tracks[5]} </p>`;
        } else {
        domString += `          <p class="card-text p-2">${arr[i].description}</p>`;
        }
        domString += '          <div class="text-center">';
        domString += '          <a href="#" class="btn btn-primary">Buy Now</a>';
        domString += '          </div>';
        domString += '      </div>';
        domString += '  </div>';
        domString += '</div>';
    
    };
    printToDom(divId, domString);
};

// CONCERT SECT ON HOMEPAGE
const buildConcertSection = () => {
    let domString = '';
    domString += `<h1 class="text-center">Live Shows!</h1>`
    domString += `<div class="d-flex flex-">`
    domString += `<div class="concert-text col-6">`
    domString +=    `<h4>Flogging lugger deadlights trysail cog. Pink lee brig Barbary Coast draft. Grog blossom capstan mizzenmast yard fathom. Jolly Roger marooned sutler flogging lateen sail. Lee come about hardtack dead men tell no tales Admiral of the Black. Skysail galleon Chain Shot keelhaul bounty. Aft hulk gunwalls hands fire in the hole. Blow the man down landlubber or just lubber boatswain hail-shot league. To go on account crow's nest cutlass doubloon Blimey. Privateer pinnace lateen sail Chain Shot code of conduct.</h4>`
    domString += `</div>`
    domString += `<div class="concert-image col-6">`
    domString +=    `<img src="https://live.staticflickr.com/65535/48480398492_97807f80bf_c.jpg" alt="High kicks in Dusseldorf"/>`
    domString += `</div>`
    domString += `</div>`

    printToDom('concert', domString);
};


// list group for CONCERTS
const listGroupBuilder = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++){
    domString += `<a onClick="buyTicketAlert(${i})" class="list-group-item list-group-item-action">${arr[i].City}  <p>When: ${arr[i].Date}</p></a>`;
    }
    printToDom('list-group', domString);
};

// function for buying tickets
const buyTicketAlert = (i) => {
    window.alert(`You just bought tickets to our show in ${Cities[i].City}. Thank you for your purchase.`)
};

// ADD CITY IN FORM ON CONCERTS PAGE
const addCity = () => {
    const newCity = new Object();
    if (document.getElementById('concert-input').value === ''){
        window.alert('Please add a city first.');
    } else {
        userInput = document.getElementById('concert-input').value;
        newCity.City = userInput;
        randomMonth = Math.floor(Math.random() * 12);
        month = months[randomMonth];
        switch (month) {
            case 'January':
            case 'March':
            case 'May':
            case 'July':
            case 'August':
            case 'October':
            case 'December':
                day = Math.floor(Math.random() * 31);
                break;
            case 'April':
            case 'June':
            case 'September':
            case 'November':
                day = Math.floor(Math.random() * 31);
                break;
            case 'February':
                day = Math.floor(Math.random() * 28);
                break;
        }
        newCity.Date = month + ' ' + day;
        Cities.push(newCity);
        listGroupBuilder(Cities);
    }
}

// MAKES THE EVENT LISTENER FOR CITIES CREATED
const buttonMaker = () => {
    for (let i = 0; i < Cities.length; i++){
    document.getElementById(`${i}`).addEventListener('click', buyTicketAlert);
    }
};

// EVENTS FUNCTION
const events = () => {
    document.getElementById('city-submit').addEventListener('click', addCity);
}

// INIT FUNCTION - THESE RUN ON PAGE LOAD
const init = () => {
    if (window.location.pathname=='/merch.html') {
        merchCards('merchContainer', merch);
    }
    
    if (window.location.pathname == '/concerts.html'){
        listGroupBuilder(Cities);
    }

    if (window.location.pathname == '/index.html'){
        buildConcertSection();
    }
    events();
};

init();