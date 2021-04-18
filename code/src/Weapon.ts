import Item from "./Item";

export default abstract class Weapon extends Item {
    public static MODIFIER_CHANGE_RATE: number = 10
    private readonly isBroken: boolean

    private readonly baseDamage: number
    private readonly baseDurability: number
    protected damageModifier: number
    protected durabilityModifier: number


    constructor(baseDamage, damageModifier, baseDurability, durabilityModifier) {

        super()
        this.isBroken = false;
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
        this.damageModifier = damageModifier;
        this.durabilityModifier = durabilityModifier;
    }

    private updateDurability(): void {
        // this.
    }

    public getDamage() {
        return this.baseDamage + this.damageModifier
    }

    public getDurability() {
        return this.baseDurability + this.durabilityModifier
    }

    public toString(): string {
        return `${super.toString()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
    }

    public use(): string {
        return this.isBroken
            ? `You can't use the ${this.name}, it is broken.`
            : `You use the ${this.name}, dealing ${this.getDamage()} points of damage.`
    }

    abstract polish(): void;

}
