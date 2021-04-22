import Item from "./Item";

export default abstract class Weapon extends Item {
    protected MODIFIER_CHANGE_RATE: number = 0.05;

    private _baseDamage: number;
    private _baseDurability: number;
    private _damageModifier: number;
    private _durabilityModifier: number;


    protected constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);
        this._damageModifier = 0.05;
        this._durabilityModifier = 0.05;
        this._baseDamage = baseDamage;
        this._baseDurability = baseDurability;
    }

    public getDamage(): number {
        const effectiveDamage = this._baseDamage + this._damageModifier;
        return Number(effectiveDamage.toFixed(2));
    }

    public getDurability(): number {
        const effectiveDurability = this._baseDurability + this._durabilityModifier;
        return Number(effectiveDurability.toFixed(2));
    }

    getDamageModifier(): any {
        return this._damageModifier;
    }

    getDurabilityModifier(): any {
        return this._durabilityModifier;
    }

    setDamageModifier(value) {
        this._damageModifier = value;
    }

    setDurabilityModifier(value) {
        this._durabilityModifier = value;
    }

    public toString(): string {
        return `${super.toString()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
    }

    public use(): string {
        let answer: string;
        const currentEffectiveDurability = this.getDurability()

        if (currentEffectiveDurability > 0) {
            answer = `You use the ${this.name}, dealing ${this.getDamage()} points of damage.`;
            const nextEffectiveDurability = currentEffectiveDurability - this.MODIFIER_CHANGE_RATE;

            this.setDurabilityModifier(this._durabilityModifier - this.MODIFIER_CHANGE_RATE)

            if (nextEffectiveDurability <= 0) {
                answer += `The ${this.name} breaks.`
            }
        } else {
            answer = `You can't use the ${this.name}, it is broken.`;
        }

        return answer
    }

    abstract polish(): void;
}
