import Weapon from "./Weapon";

export default class Sword extends Weapon {
    constructor(baseDamage, damageModifier, baseDurability, durabilityModifier) {
        super('sword', baseDamage, baseDurability, 1, 1);
    }

public polish() {
    this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
    //TODO enhance method
}

}
