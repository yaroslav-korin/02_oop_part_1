import {Comparable} from './Comparable';

let id = 0;
let counter = 0;

export default abstract class Item implements Comparable<Item> {
    private _id: number;
    private _name: string;
    private _value: number;
    private  _weight: number;

    protected constructor(name: string, value: number, weight: number) {
        this._id = id;
        this._name = name;
        this._value = value;
        this._weight = weight;

        id++;
        counter++;
    }

    get numberOfItems(): number {
        return counter;
    }

    get value(): number {
        return this._value;
    }

    get name(): string {
        return this._name;
    }

    get itemWeight(): number {
        return Number(this._weight.toFixed(2));
    }

    public compareTo(other: Item): number {
        if (this._value > other._value) {
            return 1;
        } else if (this._value < other._value) {
            return -1;
        } else {
            return this.name.localeCompare(other.name);
        }
    }

    public static reset(): void {
        counter = 0;
    }

    public toString(): string {
        return `${this.name} − Value: ${this.value}, Weight: ${this.itemWeight}`;
    }

    public abstract use();
}
