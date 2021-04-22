import {Comparable} from './Comparable';

let id = 0;
let counter = 0;

export default abstract class Item implements Comparable<Item> {
    private _id: number;
    private _name: string;
    private _value: number;
    private _weight: number;

    protected constructor(name: string, value: number, weight: number) {
        this._id = id;
        this._name = name;
        this._value = value;
        this._weight = weight;

        id++;
        counter++;
    }

    get id(): number {
        return this._id;
    }

    get value(): number {
        return this._value;
    }

    get name(): string {
        return this._name;
    }

    get weight(): number {
        return Number(this._weight.toFixed(2));
    }

    set value(price: number) {
        this._value = price;
    }

    set name(name: string) {
        this._name = name;
    }

    set weight(weight: number) {
        this._weight = weight;
    }

    public abstract use();

    public static reset(): void {
        counter = 0;
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

    public toString(): string {
        return `${this.name} − Value: ${this.value}, Weight: ${this.weight}`;
    }

}
