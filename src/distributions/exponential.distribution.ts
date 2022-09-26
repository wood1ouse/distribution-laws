import { DistributionLaw } from "@models/distribution.model";

export class ExponentialDistribution implements DistributionLaw {
    constructor(private lambda: number) { }

    pdf(values: number[]): number[] {
        return values.map((value) => {
            return this.lambda * Math.pow(Math.E, -this.lambda * value)
        })
    }
}