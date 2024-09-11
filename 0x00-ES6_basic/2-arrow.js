 export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
    // const self = this;
    this.addNeighborhood  = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }

// const instance = new getNeighborhoodsList();
// instance.addNeighborhood('test')

// console.log(instance.sanFranciscoNeighborhoods);
