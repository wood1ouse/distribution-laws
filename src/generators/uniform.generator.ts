import { FormulaRandomNumberGenerator } from "@models/generator.model"

export class UniformNumberGenerator implements FormulaRandomNumberGenerator {
    constructor(private a: number, private c: number) { }

    generate(values: number[]): number[] {
        return values.map(z => {
            const z1 = (this.a + z) % this.c
            return z1 / this.c
        })
    }
}
