import { FormulaRandomNumberGenerator } from "@models/generator.model";

export class ExponentialNumberGenerator implements FormulaRandomNumberGenerator {
    constructor(private lambda: number) {}

    generate(values: number[]): number[] {
        return values.map(value => {
            return (-(1 / this.lambda) * (Math.log2(value))) 
        })
    }
}
