import Item from "./Item";

export default abstract class Consumable extends Item {
    private _spoiled: boolean;
    private _consumed: boolean;


    protected constructor(name: string, value: number, weight: number, spoiled: boolean) {
        super(name, value, weight);
        this._consumed = false;
        this._spoiled = spoiled;
    }

    public eat(): string {
        let answer: string = `You eat the ${this.name}.`;

        if (this._spoiled) {
            answer += '\n You feel sick.';
        }

        return answer;
    }

    set consumed(value: boolean) {
        this._consumed = value;
    }

    public use(): string {
        if (this._consumed) {
            return `There is nothing left of the ${this.name} to consume.`;
        }
        return this.eat();
    }
}
