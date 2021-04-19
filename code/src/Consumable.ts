import Item from "./Item";

export default abstract class Consumable extends Item {
    private readonly spoiled: boolean
    protected readonly name: string
    protected consumed: boolean


    protected constructor(name, value, weight, spoiled) {
        super(name, value, weight)
        this.consumed = false;
        this.spoiled = spoiled;
    }

    public eat(): string {
        let answer: string = `You eat the ${this.name}.`;

        if (this.spoiled) {
            answer += '\n You feel sick.';
        }

        return answer;
    }

    public use(): string {
        if (this.consumed) {
            return `There is nothing left of the ${this.name} to consume.`;
        }
        return this.eat();
    }
}
