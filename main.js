// variables
let backButton = document.querySelector('.full-back');
let addInput1 = document.getElementById('add-input-1');


// Evenets
backButton.addEventListener('click', () => {
    backButton.href = 'welcome.html';
})


// additional input for experience page.
let sessionStorageCount = 1;
let inputCount = 1;
addInput1.addEventListener('click', () => {
    sessionStorage.setItem('count', sessionStorageCount++); // I storage the additional input.
    let newForm = document.createElement('form');
    newForm.innerHTML = `<form action="#">
    <div class="item">
        <label for="email">თანამდებობა</label>
        <input type="email" name="email" placeholder="დეველოპერი, დიზაინერი, ა.შ.">
        <p>მინიმუმ 2 სიმბოლო</p>
    </div>
    <div class="item">
        <label for="number">დამსაქმებელი</label>
        <input type="number" name="number" placeholder="დამსაქმებელი">
        <p>მინიმუმ 2 სიმბოლო</p>
    </div>
    <article>
        <div class="item">
            <label for="name">დაწყების რიცხვი</label>
            <input type="date" name="name" placeholder="ანზორი">
        </div>
        <div class="item">
            <label for="lastname">დამთავრების რიცხვი</label>
            <input type="date" name="lastname" placeholder="მუმლაძე">
        </div>
    </article>
    <div class="item">
        <label for="textarea">აღწერა</label>
        <textarea name="textarea" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
    </div>
    <p class="line1"></p>
    </form>`;
    let parentElement = document.querySelector('.info');
    parentElement.children[inputCount + 1].insertAdjacentElement("afterEnd", newForm);
    inputCount++;
})

for(let i = 0; i < sessionStorage.getItem('count'); i++) {
    let newForm = document.createElement('form');
    newForm.innerHTML = `<form action="#">
    <div class="item">
        <label for="email">თანამდებობა</label>
        <input type="email" name="email" placeholder="დეველოპერი, დიზაინერი, ა.შ.">
        <p>მინიმუმ 2 სიმბოლო</p>
    </div>
    <div class="item">
        <label for="number">დამსაქმებელი</label>
        <input type="number" name="number" placeholder="დამსაქმებელი">
        <p>მინიმუმ 2 სიმბოლო</p>
    </div>
    <article>
        <div class="item">
            <label for="name">დაწყების რიცხვი</label>
            <input type="date" name="name" placeholder="ანზორი">
        </div>
        <div class="item">
            <label for="lastname">დამთავრების რიცხვი</label>
            <input type="date" name="lastname" placeholder="მუმლაძე">
        </div>
    </article>
    <div class="item">
        <label for="textarea">აღწერა</label>
        <textarea name="textarea" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
    </div>
    <p class="line1"></p>
    </form>`;
    let parentElement = document.querySelector('.info');
    parentElement.children[inputCount + 1].insertAdjacentElement("afterEnd", newForm);
    inputCount++;
}
