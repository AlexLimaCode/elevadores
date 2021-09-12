//grab everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

//add event listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

//NAVBAR
window.addEventListener('DOMContentLoaded', () => {
    const dropBtn = document.querySelector('#dropBtn');
    const dropdown = document.querySelector('#dropdown')
    dropBtn.addEventListener('click', () => {
        dropdown.classList.toggle('hidden');
        dropdown.classList.toggle('flex');
    })
})

//Mobile Dropdown 1
window.addEventListener('DOMContentLoaded', () => {
    const dropBtnM = document.querySelector('#dropBtnM');
    const dropdownM = document.querySelector('#dropdownM')
    dropBtnM.addEventListener('click', () => {
        dropdownM.classList.toggle('hidden');
        dropdownM.classList.toggle('flex');
    })
})

//Mobile Dropdown 2
window.addEventListener('DOMContentLoaded', () => {
    const dropBtnM2 = document.querySelector('#dropBtnM2');
    const dropdownM2 = document.querySelector('#dropdownM2')
    dropBtnM2.addEventListener('click', () => {
        dropdownM2.classList.toggle('hidden');
        dropdownM2.classList.toggle('flex');
    })
})

window.onclick = function(e) {
    if (!e.target.matches('.dropBtn')) {
        var myDropdown = document.getElementById("dropdown");
        var myDropdownM = document.getElementById("dropdownM");
        if (myDropdown.classList.contains('flex')) {
            myDropdown.classList.remove('flex');
            myDropdown.classList.add('hidden');
        }
        myDropdownM.classList.toggle('hidden');
        myDropdownM.classList.toggle('flex');
    }
}