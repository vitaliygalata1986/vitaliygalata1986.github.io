function showForm() {
    document.getElementById('modal').classList.add('show')
}

function hideForm() {
    document.getElementById('modal').classList.remove('show')
}

function hideFormAction() {
    document.getElementById('modal-action').classList.remove('show')
}


let linkMenu = document.querySelectorAll('.block-header .menu .menu-block li a');
linkMenu.forEach(function (item) {
    item.onclick=function () {
        document.body.classList.remove('menu-open')
    }
})

let tabsHeader = document.querySelector('.tabs-header');
if(tabsHeader){
    tabsHeader.addEventListener('click', fTabs);
}

function fTabs(event){
    if(event.target.className === 'tab-h'){
        var dataTab = event.target.getAttribute('data-tab'); 

        var tab_h = document.getElementsByClassName('tab-h');

        for(var i = 0; i<tab_h.length; i++){
            tab_h[i].classList.remove('active');
        }
        event.target.classList.add('active');

        var tabBody = document.getElementsByClassName('tab-b');
        for(var i = 0; i<tabBody.length; i++){
            if (dataTab == i){
                tabBody[i].classList.add('active')
            }
            else{
                tabBody[i].classList.remove('active');
            }
        }
    }
}


window.onclick = function (event) {
    let modal = document.querySelector('#modal');
    if (modal) {
        if (event.target == modal) {
            modal.classList.remove('show')
        }
    }

    let modal_action = document.querySelector('#modal-action');
    if (modal_action) {
        if (event.target == modal_action) {
            modal_action.classList.remove('show')
        }
    }
}
window.onload = function(){
    setTimeout(function(){
        let modalAction = document.querySelector('#modal-action');
        if(modalAction){
            modalAction.classList.add('show')
        }
    },10000);
}


let projects_item=document.querySelectorAll('.projects-item');
if(projects_item){
    for(let i=0; i<projects_item.length; i++){
        projects_item[i].onclick=function () {
            this.classList.toggle('active')
        }
    }
}

/*
window.addEventListener('scroll', trackScroll);

function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;
    let goTopBtn = document.querySelector('.scrool');
    if(goTopBtn){
        if (scrolled > coords) {
           goTopBtn.classList.add('show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('show');
        }
    }
}
*/