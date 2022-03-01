const loadData = () => {
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
            .then(data => console.log(data))
    }
}