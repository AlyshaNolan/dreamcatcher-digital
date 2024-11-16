export default () => {
    return {
        currentGroup: 0,
        maxGroup: 0,  // Calculate number of groups
        showModal: false,
        page: '',
        screenSize: '',
        cards: 0,

        stopVideo(element) {
            video = element.querySelector("iframe");
            source = video.src;
            video.src = '';
            video.src = source;
        },

        calcMaxCards() {
            this.screenSize = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if (this.screenSize >= 1024) {
                this.maxGroup = Math.floor(((this.cards) - 1) / 3);
            } else if (this.screenSize >= 768) {
                this.maxGroup = Math.floor(((this.cards) - 1) / 2);
            } else {
                this.maxGroup = (this.cards - 1);
            }
        },

        init() {
            this.calcMaxCards()
        },

        resize() {
            this.calcMaxCards()
        },
        
        nextGroup() {
            if (this.currentGroup < this.maxGroup) {
                this.currentGroup++;
            } else {
                this.currentGroup = 0;  // Loop back to the first group
            }
        },

        prevGroup() {
            if (this.currentGroup > 0) {
                this.currentGroup--;
            } else {
                this.currentGroup = this.maxGroup;  // Loop to the last group
            }
        }
    }
  }
  
  
  