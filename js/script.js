const loadData = () => {
    document.getElementById('card').innerHTML = ""
    const input = document.getElementById('search-feild');
    const erorr = document.getElementById('error');
    const noshow = document.getElementById('noShow');
    const searchText = input.value;
    input.value = "";
    if (searchText == "") {
        erorr.innerText = "Try Again"
    }

    else {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
            .then(response => response.json())
            .then(data => fontShow(data.data))
        erorr.innerText = ""
    }
}
const fontShow = phones => {
    // console.log(phones)

    for (const phone of phones) {
        // console.log(phone)
        const card = document.getElementById('card');
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <p class="card-text">${phone.phone_name}</p>
                    <button onclick="details('${phone.slug}')" type="button" class="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
        `;
        card.appendChild(div)

    }
}
const details = id => {
    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data))
}
const showDetails = info => {
    console.log(info)
    const seedetails = document.getElementById('details');
    seedetails.innerHTML = `
    <div class="card" style="width: 18rem;">
                <img src="${info.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${info.brand}</h5>
                    <p class="card-text">Name: ${info.name}</p>
                    <p class="card-text">Chip Set: ${info.mainFeatures.chipSet}</p>
                    <p class="card-text">Display: ${info.mainFeatures.displaySize}</p>
                    <p class="card-text">Storage: ${info.mainFeatures.storage}</p>
                    <p class="card-text">Memory: ${info.mainFeatures.memory}</p>
                    <p class="card-text">Sensor: ${info.mainFeatures.sensors[0]}</p>
                    <p class="card-text">Sensor: ${info.mainFeatures.sensors[1]}</p>
                    <p class="card-text">Sensor: ${info.mainFeatures.sensors[2]}</p>
                    <p class="card-text">Sensor: ${info.mainFeatures.sensors[3]}</p>
                    <p class="card-text">Sensor: ${info.mainFeatures.sensors[4]}</p>
                    <p class="card-text">Sensor: ${info.mainFeatures.sensors[5]}</p>
                    <p class="card-text">GPS: ${info.others.GPS}</p>
                    <p class="card-text">NFC: ${info.others.NFC}</p>
                    <p class="card-text">Radio: ${info.others.Radio}</p>
                    <p class="card-text">USB: ${info.others.USB}</p>
                    <p class="card-text">WLAN: ${info.others.WLAN}</p>
                    <p class="card-text">Release Date: ${info.releaseDate}</p>
                </div>
            </div>
        </div>
    `;

}