import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(page,btns){
        super(page,btns);
    }


    showSlides(n){
        if(n > this.slides.length){
            this.slideIndex = 1;
        }

        if(n < 1){
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(element => {
            element.style.display= 'none';
        });
        this.hanson.style.opacity = '0';

        this.slides[this.slideIndex - 1].style.display = 'block';

        if(n === 3){
            this.hanson.classList.add('animated');
            setTimeout(()=>{
                if(this.slideIndex === 3){
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }               
            },3000);
        }
        else{
            this.hanson.classList.remove('slideInUp');
        }
            
    }

    plusSlides(n){
        this.showSlides(this.slideIndex += n);
    }

    render(){
            this.hanson = document.querySelector('.hanson');
            

        this.btns.forEach(item =>{
            item.addEventListener('click',()=>{
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click',(e)=>{
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);
    }
}