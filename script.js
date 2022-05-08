// console.log('Test de conectivitate');
let showHamburgerMenu = document.querySelector('.menu-icon');
// console.log(showHamburgerMenu);
function handleDropDownMenu (){
    let dropDownList = document.querySelector('.show-dropdown');
    let dropDownListStyle = window.getComputedStyle(dropDownList);
    let dropdownVisibility =  dropDownListStyle.getPropertyValue("visibility"); 
    if (dropdownVisibility === 'visible'){
        dropDownList.style.visibility = "hidden";
    } else{
        dropDownList.style.visibility = "visible";
    }
    
    };
    showHamburgerMenu.addEventListener('click', handleDropDownMenu );