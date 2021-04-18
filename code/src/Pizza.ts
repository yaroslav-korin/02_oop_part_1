import Consumable from "./Consumable";

export default class Pizza extends Consumable {
    private numberOfSlices: number
    private slicesEaten: number

    constructor(numberOfSlices, spoiled) {
        super();
        this.numberOfSlices = numberOfSlices;
    }

    public eat() {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if (this.slicesEaten >= this.numberOfSlices) {

            }
        }
    }
}
