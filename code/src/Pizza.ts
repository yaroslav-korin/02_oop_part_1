import Consumable from "./Consumable";

export default class Pizza extends Consumable {
    private readonly numberOfSlices: number;
    private slicesEaten: number;

    constructor(numberOfSlices, spoiled) {
        super('pizza', 10, 1, spoiled);
        this.numberOfSlices = numberOfSlices;
    }

    public eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.consumed = true;
            }

            return `You eat a slice of the ${this.name}`
        }
        return super.use()
    }
}
