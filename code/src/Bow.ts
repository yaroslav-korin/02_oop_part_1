import Weapon from "./Weapon";

export default class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('bow', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        const increasedDurabilityModifier = this.durabilityModifier + this.MODIFIER_CHANGE_RATE;
        this.durabilityModifier = increasedDurabilityModifier < 1 ? increasedDurabilityModifier : 1;
    }

}
