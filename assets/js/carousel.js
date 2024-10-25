export default () => {
    return {
        currentGroup: 0,
        maxGroup: 0,  // Calculate number of groups
        showModal: false,
        page: '',
        
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
                this.currentGroup = this.maxGroup;  // Loop back to the last group
            }
        }
    }
  }
  
  
  