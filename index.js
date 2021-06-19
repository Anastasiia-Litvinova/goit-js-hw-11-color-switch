const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const elems = {
    startButton: document.querySelector('[data-action="start"]'),
    stopButton: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}

const changeApp = {
    intervalID: null,
    isActive: false,

    start() {
        if (this.isActive) { return }
        this.isActive=true
        this.intervalID = setInterval(() => {
             elems.body.style.background=colors[randomIntegerFromInterval(0, (colors.length-1))]
        }, 1000);
    
    },

    stop() {
        clearInterval(this.intervalID)
        this.isActive=false
    }
}

elems.startButton.addEventListener('click', ()=>{changeApp.start()})
elems.stopButton.addEventListener('click', ()=>{changeApp.stop()})


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};