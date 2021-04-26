export default class Difference{
    constructor(oldOfficer,newOfficer,items){
        this.Officer = [document.querySelector(oldOfficer),document.querySelector(newOfficer)];
        this.Items = [this.Officer[0].querySelectorAll(items),this.Officer[1].querySelectorAll(items)];
        this.Counter = [0,0];
    }

    bindTriggers(){
        this.Officer.forEach((item,i,arr) =>{
            this.Officer[i].querySelector('.plus').addEventListener('click', ()=>{
                if(this.Counter[i] !== this.Items[i].length - 2){
                    this.Items[i][this.Counter[i]].style.display = 'flex';
                    this.Counter[i]++;
                } else{
                    this.Items[i][this.Counter[i]].style.display = 'flex';
                    this.Items[i][this.Items[i].length - 1].remove();
                }
            });
        });
    }

    hideItems(){
        this.Officer.forEach((item,i,arr)=>{
            this.Items[i].forEach((item,i,arr)=>{
                if(i !== arr.length - 1){
                    item.style.display = 'none';
                }
            });
        });
    }

    init(){
        this.hideItems();
        this.bindTriggers();
    }
}