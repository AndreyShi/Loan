export default class ShowInfo{
    constructor(triggers){
        this.btns = document.querySelectorAll(triggers);
    }

    init(){
        this.btns.forEach(btn=>{
            btn.addEventListener('click',()=>{

                if(btn.closest('.module__info-show').nextElementSibling.style.display == 'block')
                    btn.closest('.module__info-show').nextElementSibling.style.display = 'none';
                else
                    btn.closest('.module__info-show').nextElementSibling.style.display = 'block';
                //console.log(btn.closest('.module__info-show').nextElementSibling.style.display);
            });
        });
    }
}