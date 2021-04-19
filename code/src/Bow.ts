import Weapon from "./Weapon";

export  class Bow extends Weapon {
    public name: string;

    constructor(props) {
        super(props);
        this.name = 'bow';
    }

    public polish(): void {
        const increasedDurabilityModifier = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
        this.durabilityModifier = increasedDurabilityModifier < 1 ? increasedDurabilityModifier : 1;
    }

}
