import Weapon from "./Weapon";

export default class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        this.damageModifier = this.damageModifier + this.MODIFIER_CHANGE_RATE;
    }

}
