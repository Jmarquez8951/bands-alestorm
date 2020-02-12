const merch = [
    {
        title: 'Captain Morgan\'s Revenge',
        imgURL: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/2/12555_alestorm_captain_morgan_s_revenge_cd_folk_metal_napalm_records_.jpg',
        type: 'cd',
        tracks: ['"Over the Seas"', '"Captain Morgan\'s Revenge"', '"The Huntmaster"', '"Nancy the Tavern Wench"', '"Death Before the Mast"', '"Terror on the High Seas"'],
        onSale: false,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.',
    },
    {
        title: 'Black Sails at Midnight',
        imgURL: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/1/3/13704_alestorm_black_sails_at_midnight_cd_pirate_metal_napalm_records_1.jpg',
        type: 'cd',
        tracks: ['"The Quest" (Christopher Bowes)', '"Leviathan" (Bowes)', '"That Famous Ol\' Spiced"', '"Keelhauled"', '"To the End of Our Days"', '"Black Sails at Midnight"'],
        onSale: false,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm Kilt',
        imgURL: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/9/59121-1_alestorm_green_tartan_kilt_napalm_records.jpg',
        type: 'clothing',
        onSale: true,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm Hoodie',
        imgURL: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/3/53746-1_alestorm_pirate_pizza_party_zip_hoodie_napalm_records.jpg',
        type: 'clothing',
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm T-shirt',
        imgURL: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/5/0/50348_alestorm_25_years_napalm_records_t-shirt_napalm_records.jpg',
        type: 'clothing',
        onSale: false,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm T-shirt',
        imgURL: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/2/7/27241_alestorm_banana_duck_girlie_shirt_napalm_records.jpg',
        type: 'clothing',
        onSale: false,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm Beanie',
        imgURL: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/3/1/31419_alestorm_red_logo_beanie_napalm_records.jpg',
        type: 'clothing',
        onSale: false,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Curse of the Crystal Coconut',
        imgURL: 'https://images.unsplash.com/photo-1554444510-592779e6e009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
        type: 'cd',
        tracks: ['"The Coconut Calls"', '"Tales from the Coconut Crypt"', '"Old Man River (cover)"', '"Why\'s the Rum Gone?"', '"You Drive me Coco-nutty"', '"Nutella"'],
        onSale: true,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    },
    {
        title: 'Alestorm Tank Top',
        imgURL: 'https://napalmrecords.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/4/4/44537-2_alestorm_pirate_pizza_party_girlie_tank_top_napalm_records.jpg',
        type: 'clothing',
        onSale: true,
        description: 'Jack Ketch sutler dance the hempen jig parrel hardtack aye. Pink boatswain mizzen log heave down draft.'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = texttoPrint;
};

const merchCards = (divId, arr) => {
    let domString = '';
    for (let i = 0; i <arr.length; i++) {
        domString += '<div class="card">';
        domString += '  <h5 class="card-title">Card title</h5>'
        domString += '  <div class="card-body">';
        domString += '      <img class="card-img-top" src="..." alt="Card image cap">';
        domString += '      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>';
        domString += '      <a href="#" class="btn btn-primary">Go somewhere</a>';
        domString += '  </div>';
        domString += '</div>';
    };
    printToDom(divId, domString);
}

const init = () => {
    merchCards('merchContainer', merch);
}

init();