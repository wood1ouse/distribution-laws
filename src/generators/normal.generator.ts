import { FormulaRandomNumberGenerator } from "@models/generator.model";

import { sum } from "mathjs";

export class NormalNumberGenerator implements FormulaRandomNumberGenerator {
    constructor(private sigma: number, private a: number) { }

    generate(values: number[][]): number[] {
        return values.map((xl) => {
            const mu = sum(xl) - 6

            return this.sigma * mu + this.a
        })
    }
}
