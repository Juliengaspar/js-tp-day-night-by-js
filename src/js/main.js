/*
window.document.documentElement.classList.add('js-enabled');
const tumblerElement = document.querySelector('.tumbler');
const postElements = document.querySelectorAll('.post');
const tumblerWrapperElement = document.querySelector('.tumbler__wrapper');
tumblerWrapperElement.addEventListener('click', ()=>{
    console.log('click');
   document.body.classList.toggle('body--night-mode');
    tumblerElement.classList.toggle('tumbler--night-mode');
    postElements.forEach(postElements => {
        postElements.classList.toggle('post--night-mode')
    });
});
 */

(
    function () {
        const dayNight = {
            tumblerElement : document.querySelector('.tumbler'),
            postElements : document.querySelectorAll('.post'),
            tumblerWrapperElement : document.querySelector('.tumbler__wrapper'),

            init(){
                window.document.documentElement.classList.add('js-enabled')
                this.addEventListeners();
            },
            addEventListeners(){
                this.tumblerWrapperElement.addEventListener('click', ()=>{
                    console.log('click');
                    document.body.classList.toggle('body--night-mode');
                    this.tumblerElement.classList.toggle('tumbler--night-mode');
                    this.postElements.forEach(postElements => {
                        postElements.classList.toggle('post--night-mode');
                    })
                });
            },
        }
        dayNight.init();
    }
)()

/*
(function () {
        const DayNight = {
            cacheDom() {
                this.body = document.body;
                this.tumbler = document.querySelector('.tumbler');
                this.posts = document.querySelectorAll('.post');
                this.tumblerWrapper = document.querySelector('.tumbler__wrapper');
            },
            init() {
                window.document.documentElement.classList.add('js-enabled');
                this.cacheDom();
                this.addEventListeners();
            },
            addEventListeners() {
                console.log(this.tumblerWrapper);
                this.tumblerWrapper.addEventListener('click', () => {
                    this.body.classList.toggle('body--night-mode');
                    this.tumbler.classList.toggle('tumbler--night-mode');
                    this.posts.forEach(post => {
                        post.classList.toggle('post--night-mode')
                    });
                })
            }

        };
        DayNight.init();
    }
)();

 */