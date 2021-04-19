import Consumable from "./Consumable";

export default class Pizza extends Consumable {
    private _numberOfSlices: number;
    private _slicesEaten: number;

    constructor(numberOfSlices: number, spoiled: boolean) {
        super('pizza', 10, 1, spoiled);
        this._numberOfSlices = numberOfSlices;
    }

    public eat(): string {
        if (this._slicesEaten < this._numberOfSlices) {
            this._slicesEaten++;

            if (this._slicesEaten >= this._numberOfSlices) {
                this.consumed = true;
            }

            return `You eat a slice of the ${this.name}`;
        }
        return super.use()
    }
}
