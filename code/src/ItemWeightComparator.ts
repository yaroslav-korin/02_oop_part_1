import Item from './Item';
import ItemComparator from './ItemComparator';

export default class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item): number {
        if (first.itemWeight > second.itemWeight) {
            return 1;
        } else if (first.itemWeight < second.itemWeight) {
            return -1;
        } else {
            return first.compareTo(second);
        }
    }
}
