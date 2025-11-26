

(
    () =>{
        const app ={
            init(){
                console.log("test");
                document.documentElement.classList.add("js-enabled");
                this.addEvenlisters();

            },
            addEvenlisters(){
                const buttonClick = document.querySelector('.tumbler__wrapper');
                const bodiELt = document.querySelector('body');
                const divElt = document.querySelector('.tumbler');
                const titleh3Elt = document.querySelector('.post > .post__title');
                const pElt = document.querySelector('.post > .post__text');
                if(buttonClick === null){
                    console.log(buttonClick);
                    return;
                }
                buttonClick.addEventListener('click',e => {
                    //console.log('click');
                    bodiELt.classList.toggle("body--night-mode");
                    divElt.classList.toggle("tumbler--night-mode");
                    titleh3Elt.classList.toggle("post--night-mode");
                    pElt.classList.toggle("post--night-mode");
                })
            }
        }
        app.init();
    }

)()