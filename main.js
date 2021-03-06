// Merch Array for merch page
const merch = [ 
   {
      title: 'Captain Morgan\'s Revenge',
      imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/2/12555_alestorm_captain_morgan_s_revenge_cd_folk_metal_napalm_records_.jpg',
      type: 'cd',
      tracks: ['"Over the Seas"', '"Captain Morgan\'s Revenge"', '"The Huntmaster"', '"Nancy the Tavern Wench"', '"Death Before the Mast"', '"Terror on the High Seas"'],
      onSale: false,
      description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft. List Arr bucko draught matey black spot lad.',
   },
   {
      title: 'Black Sails at Midnight',
      imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/3/13704_alestorm_black_sails_at_midnight_cd_pirate_metal_napalm_records_1.jpg',
      type: 'cd',
      tracks: ['"The Quest" (Christopher Bowes)', '"Leviathan" (Bowes)', '"That Famous Ol\' Spiced"', '"Keelhauled"', '"To the End of Our Days"', '"Black Sails at Midnight"'],
      onSale: false,
      description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft. List Arr bucko draught matey black spot lad. List Arr bucko draught matey black spot lad.'
   },
   {
      title: 'Alestorm Kilt',
      imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/9/59121-1_alestorm_green_tartan_kilt_napalm_records.jpg',
      type: 'clothing',
      onSale: true,
      description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft. List Arr bucko draught matey black spot lad.'
   },
   {
      title: 'Alestorm Hoodie',
      imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/3/53746-1_alestorm_pirate_pizza_party_zip_hoodie_napalm_records.jpg',
      type: 'clothing',
      description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft. List Arr bucko draught matey black spot lad.'
   },
   {
      title: 'Alestorm T-shirt',
      imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/0/50348_alestorm_25_years_napalm_records_t-shirt_napalm_records.jpg',
      type: 'clothing',
      onSale: false,
      description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft. List Arr bucko draught matey black spot lad.'
   },
   {
      title: 'Alestorm T-shirt',
      imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/7/27241_alestorm_banana_duck_girlie_shirt_napalm_records.jpg',
      type: 'clothing',
      onSale: false,
      description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft. List Arr bucko draught matey black spot lad.'
   },
   {
      title: 'Alestorm Beanie',
      imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/3/1/31419_alestorm_red_logo_beanie_napalm_records.jpg',
      type: 'clothing',
      onSale: false,
      description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft. List Arr bucko draught matey black spot lad.'
   },
   {
      title: 'Curse of the Crystal Coconut',
      imgUrl: 'https://images.unsplash.com/photo-1554444510-592779e6e009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
      type: 'cd',
      tracks: ['"The Coconut Calls"', '"Tales from the Coconut Crypt"', '"Old Man River (cover)"', '"Why\'s the Rum Gone?"', '"You Drive me Coco-nutty"', '"Nutella"'],
      onSale: true,
      description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft. List Arr bucko draught matey black spot lad.'
   },
   {
      title: 'Alestorm Tank Top',
      imgUrl: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/4/4/44537-2_alestorm_pirate_pizza_party_girlie_tank_top_napalm_records.jpg',
      type: 'clothing',
      onSale: true,
      description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft. List Arr bucko draught matey black spot lad.'
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

let userArray = [];

// PRINT TO DOM FUCTION
const printToDom = (divId, textToPrint) => {
   const selectedDiv = document.getElementById(divId);
   selectedDiv.innerHTML = textToPrint;
};


const newEmailUser = (e) => {
   e.preventDefault();
   let user = new Object();
   user.name = document.getElementById('nameInput').value;
   user.email = document.getElementById('emailInput').value;
   if(user.name !== '' && user.email !== '') {   // forces a name selection
      userArray.push(user);
      window.alert(`Thank you ${user.name} for subscribing!`)
   } else {
      window.alert("You have to put something here!")
   };
}


const printEmailForm = () => {
         let domString = '';
         domString += `<form class="text-center">`
         domString += `   <div class="form-group">`
         domString += `      <label for="InputName">Your Name</label>`
         domString += `      <input type="text" class="form-control" id="nameInput">`
         domString += `   </div>`
         domString += `   <div class="form-group">`
         domString += `      <label for="inputEmail">Email Address</label>`
         domString += `      <input type="text" class="form-control" id="emailInput">`
         domString += `      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>`
         domString += `   </div>`
         domString += `   <button id="btn-email" class="btn btn-primary">Submit</button>`
         domString += `</form>`
         
         printToDom('email-form', domString);
}
// building MERCH cards for MERCH PAGE
const merchCards = (divId, arr) => {
   let domString = '';
   for (let i = 0; i < arr.length; i++) {
      domString += '<div class="col-md-4 col-lg-4 my-3 ">';
      domString += '  <div class="card bg-light merch-cards">';
      domString += `      <h3 class="card-title p-2 text-center">${arr[i].title}</h3>`;
      domString += '      <div class="card-body">';
      domString += `          <img class="card-img-top merch-img-cards" src="${arr[i].imgUrl}" alt="merch image">`;
         if (arr[i].type === 'cd') {
            domString += `<p class="card-text p-2">Track List: 1. ${arr[i].tracks[0]}, 2. ${arr[i].tracks[1]}, 3. ${arr[i].tracks[2]}, 4. ${arr[i].tracks[3]}, 5. ${arr[i].tracks[4]}, 6. ${arr[i].tracks[5]} </p>`;
            } else {
            domString += `          <p class="card-text p-2">${arr[i].description}</p>`;
            }
      domString += '          <div class="text-center">';
      domString += `         <a onClick="buyNowAlert(${i})" class="btn btn-primary">Buy Now</a>`;
      domString += '          </div>';
      domString += '      </div>';
      domString += '  </div>';
      domString += '</div>';   
   };
   printToDom(divId, domString);
};

// MERCH FILTER BTNS - Clothing, CDs, All
const merchFilter = (e) => {
   const buttonId = e.target.id;
   const findMerch = [];
   if (buttonId === 'all') {
      merchCards('merchContainer', merch);
   } else {
      for (let i = 0; i < merch.length; i++) {
            if (merch[i].type === buttonId) {
               findMerch.push(merch[i]);
            };
         };
         merchCards('merchContainer', findMerch);
   };
};

// MERCH FILTER BTN - SALE
const saleFilter = () => {
      const findMerch = [];
      for (let i = 0; i < merch.length; i++) {
            if (merch[i].onSale === true) {
               findMerch.push(merch[i]);
            };
      };
      merchCards('merchContainer', findMerch);
};

// MERCH PAGE - BUY NOW BTN ON CARDS FUNC
const buyNowAlert = (i) => {
   window.alert(`Congratulations! You have purchased ${merch[i].title}. We now have all your credit card information. Our system is super safe. Don't even sweat it, dawg.`)
}

// CONCERT SECT ON HOMEPAGE
const buildConcertSection = () => {
   let domString = '';
   domString += `<h1 class="text-center" style:"margin: 3%;">Live Shows!</h1>`
   domString += `<div class="d-flex flex-">`
   domString += `<div class="concert-text col-6">`
   domString +=    `<h4>Flogging lugger deadlights trysail cog. Pink lee brig Barbary Coast draft. Grog blossom capstan mizzenmast yard fathom. Jolly Roger marooned sutler flogging lateen sail. Lee come about hardtack dead men tell no tales Admiral of the Black. Skysail galleon Chain Shot keelhaul bounty. Aft hulk gunwalls hands fire in the hole. Blow the man down landlubber or just lubber boatswain hail-shot league. To go on account crow's nest cutlass doubloon Blimey. Privateer pinnace lateen sail Chain Shot code of conduct.</h4>`
   domString += `</div>`
   domString += `<div class="concert-image col-6">` 
   domString += `<a href="./concerts.html">`
   domString +=    `<img src="https://live.staticflickr.com/65535/48480398492_97807f80bf_c.jpg" alt="High kicks in Dusseldorf"/>`
   domString +=    `<div class="middle-box"><div class="text">Buy Tickets!</div></div>`
   domString += `</a>`
   domString += `</div>`
   domString += `</div>`
   printToDom('concert', domString);
};

const buildMerchSection = (merchArray) => {
   let domString = '';
   merchArray.forEach(merch => {
      if (merch.onSale) {
         domString += `<div class="card col-md-4 col-lg-4">`
         domString += `   <img src="${merch.imgUrl}" class="card-img-top" alt="${merch.title}">`
         domString += `   <div class="card-body text-center">`
         domString += `      <a href="./merch.html" class="btn btn-success">Buy Now!</a>`
         domString += `   </div>`
         domString += `</div>`
      }
   });
   printToDom('merch', domString);
}

// list group for CONCERTS
const listGroupBuilder = (arr) => {
   let domString = '';
   for (let i = 0; i < arr.length; i++){
      domString += `<a onClick="buyTicketAlert(${i})" class="row border rounded mb-1 list-group-item-action bg-light"><p class="col">${arr[i].City}</p><p class="col text-center">When: ${arr[i].Date}</p><p class="col text-right">Buy Now</p></a>`;
   }
   printToDom('list-group', domString);
};

// function for buying tickets
const buyTicketAlert = (i) => {
   window.alert(`You just bought tickets to our show in ${Cities[i].City}. Thank you for your purchase.`);
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
};

// EVENTS FUNCTION
const events = () => {
    // events to run on concert page
   if (window.location.pathname == '/concerts.html') {
   document.getElementById('city-submit').addEventListener('click', addCity);
   }
   //events to run on merch page
   if (window.location.pathname=='/merch.html') {
   document.getElementById('clothing').addEventListener('click', merchFilter);
   document.getElementById('cd').addEventListener('click', merchFilter);
   document.getElementById('all').addEventListener('click', merchFilter);
   document.getElementById('onSale').addEventListener('click', saleFilter);
   }
   if (window.location.pathname=='/index.html') {
      document.getElementById('btn-email').addEventListener('click', newEmailUser);
   }
}
// INIT FUNCTION - THESE RUN ON PAGE LOAD
const init = () => {
    // functions to run on merch page
   if (window.location.pathname=='/merch.html') {
      merchCards('merchContainer', merch);
      events();
   }
   // functions to run on concerts page
   if (window.location.pathname == '/concerts.html'){
      listGroupBuilder(Cities);
      events();
   }
   // functions to run on index
   if (window.location.pathname == '/index.html'){
      buildConcertSection();
      buildMerchSection(merch);
      printEmailForm();
      events();
   }

};

init();