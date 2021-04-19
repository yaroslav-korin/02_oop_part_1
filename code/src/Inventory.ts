import Item from "./Item";
import ItemComparator from "./ItemComparator";

export default class Inventory {
    private items: Item[];

    public sort();
    public sort(comparator: ItemComparator);
    public sort(comparator?: ItemComparator) {
        if (comparator) {
            return this.items.sort((a, b) => a.itemWeight - b.itemWeight);
        } else {
            return this.items.sort((a, b) => a.itemValue - b.itemValue);
        }
    }

    public addItem(): void {
        // is outer of current home task
    }

    public toString(): string {
        return this.items.join(', ');
    }

}
