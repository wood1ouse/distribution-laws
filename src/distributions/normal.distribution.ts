import { DistributionLaw } from "@models/distribution.model";

import { mean, variance } from "mathjs";

export class NormalDistribution implements DistributionLaw {
    constructor() { }

    pdf(values: number[]): number[] { 
        const a = mean(values)
        const sigma = (variance(values) as unknown as number)

        return values.map((x) => {
            return ((1 / (sigma) * Math.sqrt(2 * Math.PI)) * Math.exp(- (Math.pow((x - a), 2) / (2 * sigma**2))))
        })
    }
}