let profile = document.querySelector('.profile');
let skills = document.querySelector('.skills');
let projects = document.querySelector('.projects');
let employment = document.querySelector('.employment');
let contact = document.querySelector('.contact');

let bingo = document.querySelector('#bingo');
let contactMe = document.querySelector('.profile button');
let headerList = document.querySelector('.header ul');

contactMe.addEventListener('click', function(){
    bingo.style.display = 'block';
    setTimeout(function(){
        bingo.style.display = 'none';
    }, 2000)
});

headerList.addEventListener('click', function(event){
    if(event.target.NodeName = 'IMG'){
        profile.classList.remove('onShow');
        skills.classList.remove('onShow');
        projects.classList.remove('onShow');
        employment.classList.remove('onShow');
        contact.classList.remove('onShow');
        switch(event.target.getAttribute('title')){
            case 'Profile': 
                profile.classList.add('onShow');
                break;
            case 'Skills': 
                skills.classList.add('onShow');
                break;
            case 'Projects': 
                projects.classList.add('onShow');
                break;
            case 'Employment': 
                employment.classList.add('onShow');
                break;
            case 'Contact': 
                contact.classList.add('onShow');
                break;
        }
    }

});


