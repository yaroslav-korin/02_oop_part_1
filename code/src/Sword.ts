import Weapon from "./Weapon";

export default class Sword extends Weapon {
    public name: string

    constructor(baseDamage, damageModifier, baseDurability, durabilityModifier) {
        super(baseDamage, damageModifier, baseDurability, durabilityModifier);
        this.name = 'sword';
    }

public polish() {
    this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
    //TODO enhance method
}

}
