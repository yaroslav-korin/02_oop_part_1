import Item from "./Item";

export default abstract class Weapon extends Item {
    public MODIFIER_CHANGE_RATE: number = 0.05;
    private isBroken: boolean;

    private _baseDamage: number;
    private _baseDurability: number;
    private _damageModifier: number;
    private _durabilityModifier: number;


    protected constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {

        super(name, value, weight);
        this.isBroken = false;
        this._baseDamage = baseDamage;
        this._baseDurability = baseDurability;
        this._damageModifier = 0;
        this._durabilityModifier = 0;
    }

    public getDamage(): number {
        const effectiveDamage = this._baseDamage + this._damageModifier;
        return Number(effectiveDamage.toFixed(2));
    }

    public getDurability(): number {
        const effectiveDurability = this._baseDurability + this._durabilityModifier;
        return Number(effectiveDurability.toFixed(2));

    }

    get damageModifier() {
        return this._damageModifier;
    }
    set damageModifier(value: number) {
        this._damageModifier = value;
    }
    get durabilityModifier() {
        return this._durabilityModifier;
    }
    set durabilityModifier(value: number) {
        this._durabilityModifier = value;
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
