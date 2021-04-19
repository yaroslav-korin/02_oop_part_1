import {Comparable} from './Comparable';

let id = 0;
let counter = 0;

export default abstract class Item implements Comparable<Item> {
    private id: number;
    protected name: string;
    protected value: number;
    private readonly weight: number;

    protected constructor(name, value, weight) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.weight = weight;

        id++;
        counter++;
    }

    get numberOfItems(): number {
        return counter;
    }

    get itemValue(): number {
        return this.value
    }

    get itemWeight(): number {
        return this.weight
    }

    public compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1;
        } else if (this.value < other.value) {
            return -1;
        } else {
            return this.name.localeCompare(other.name)
        }
    }

    public static reset(): void {
        counter = 0;
    }

    public toString(): string {
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
    }

    public abstract use();
}
