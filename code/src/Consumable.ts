export default abstract class Consumable {
    private readonly consumed: boolean
    private readonly spoiled: boolean
    private readonly name: string


    constructor() {
        // super(props)
        this.consumed = false;
        this.spoiled = spoiled;
    }

    private eat() {
        if (this.consumed) {
            return `There is nothing left of the ${this.name} to consume.`;
        } else {
            let answer: string = `You eat the ${this.name}.`;

            if (this.spoiled) {
                answer += '\n You feel sick.';
            }

            return answer;
        }
    }

    public use() {
        if (!this.consumed && !this.spoiled) {
            return this.eat()
        }
    }
}
