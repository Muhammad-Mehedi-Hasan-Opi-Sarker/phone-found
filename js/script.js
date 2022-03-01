const loadData = () => {
    document.getElementById('card').innerHTML = ""
    const input = document.getElementById('search-feild');
    const erorr = document.getElementById('error');
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
                    <button type="button" class="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
        `;
        card.appendChild(div)

    }
}