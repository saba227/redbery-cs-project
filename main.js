// variables
let backButton = document.querySelector('.full-back');
let addInput1 = document.getElementById('add-input-1');
let addInput2 = document.getElementById('add-input-2');
let parentElement = document.querySelector('.info');
let dropDownButton = document.getElementById('dropDownButton');
let dropInputs = document.querySelectorAll('.drop-down div')


let expNewForm = `<form action="#">
<div class="item">
    <label for="text">თანამდებობა</label>
    <input type="email" name="text" placeholder="დეველოპერი, დიზაინერი, ა.შ.">
    <p>მინიმუმ 2 სიმბოლო</p>
</div>
<div class="item">
    <label for="text">დამსაქმებელი</label>
    <input type="number" name="text" placeholder="დამსაქმებელი">
    <p>მინიმუმ 2 სიმბოლო</p>
</div>
<article>
    <div class="item">
        <label for="small">დაწყების რიცხვი</label>
        <input type="date" name="small" placeholder="ანზორი">
    </div>
    <div class="item">
        <label for="small">დამთავრების რიცხვი</label>
        <input type="date" name="small" placeholder="მუმლაძე">
    </div>
</article>
<div class="item">
    <label for="textarea">აღწერა</label>
    <textarea name="textarea" placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"></textarea>
</div>
<p class="line1"></p>
</form>`;

let eduNewForm = `<form action="#">
<div class="item">
    <label for="text">სასწავლებელი</label>
    <input type="text" name="text" placeholder="სასწავლებელი">
    <p>მინიმუმ 2 სიმბოლო</p>
</div>
<article>
    <div class="item">
        <label for="small">ხარისხი</label>
        <input type="text" name="small" placeholder="აირჩიეთ ხარისხი">
    </div>
    <div class="item">
        <label for="small">დამთავრების რიცხვი</label>
        <input type="date" name="small">
    </div>
</article>
<div class="item">
    <label for="textarea">აღწერა</label>
    <textarea name="textarea" placeholder="განათლების აღწერა" style="height: 179px;"></textarea>
</div>
<p class="line1"></p>
</form>`

// Fetch API for quality dropdown in education page 
fetch('https://resume.redberryinternship.ge/api/degrees')
.then(respons => respons.json())
.then(respons => {
    for(let i = 0; i < dropInputs.length; i++) {
        dropInputs[i].innerText = respons[i].title;
    }
})

// Evenets
backButton.addEventListener('click', () => {
    backButton.href = 'welcome.html';
})

// additional input for experience page.
if(location.href.split("/").slice(-1)[0] == 'experience.html') {
    addInput1.onclick = () => {
        let expForm = document.createElement('form');
        expForm.innerHTML = expNewForm;
        sessionStorage.setItem('experienceCount', 1); // I storage the additional input.
        parentElement.children[2].insertAdjacentElement("afterEnd", expForm);

    };
    for(let i = 0; i < sessionStorage.getItem('experienceCount'); i++) {
        let expForm = document.createElement('form');
        expForm.innerHTML = expNewForm;
        parentElement.children[2].insertAdjacentElement("afterEnd", expForm);
    }

} else if (location.href.split("/").slice(-1)[0] == 'education.html') {
    addInput2.onclick = () => {
        let expForm = document.createElement('form');
        expForm.innerHTML = eduNewForm;
        sessionStorage.setItem('educationCount', 1); // I storage the additional input.
        parentElement.children[2].insertAdjacentElement("afterEnd", expForm);
    };

    for(let i = 0; i < sessionStorage.getItem('educationCount'); i++) {
        let expForm = document.createElement('form');
        expForm.innerHTML = eduNewForm;
        parentElement.children[2].insertAdjacentElement("afterEnd", expForm);
    }
}

// drop down for education.html
dropDownButton.addEventListener('click', () => {
    document.querySelector('.drop-down').classList.toggle('drop-down-togle');
})

for(let i = 0; i < dropInputs.length; i++) {
    dropInputs[i].addEventListener('click', (e) => {
        dropDownButton.childNodes[0].innerHTML = e.target.innerText;
        document.querySelector('.drop-down').classList.remove('drop-down-togle');
    })
}