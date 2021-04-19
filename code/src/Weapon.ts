import Item from "./Item";

export default abstract class Weapon extends Item {
    public static MODIFIER_CHANGE_RATE: number = 0.05;
    private readonly isBroken: boolean;

    private readonly baseDamage: number;
    private readonly baseDurability: number;
    protected damageModifier: number;
    protected durabilityModifier: number;


    protected constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {

        super(name, value, weight);
        this.isBroken = false;
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    public toString(): string {
        return `${super.toString()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
    }

    public use(): string {
        return this.isBroken
            ? `You can't use the ${this.name}, it is broken.`
            : `You use the ${this.name}, dealing ${this.getDamage()} points of damage.`;
    }

    abstract polish(): void;

}
