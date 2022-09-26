import { DistributionLaw } from "@models/distribution.model"

import { inRange } from "lodash"

export class UniformDistribution implements DistributionLaw {
    constructor(private a: number, private b: number) { }

    pdf(values: number[]): number[] { 
        return values.map(x => {
            return inRange(x, this.a, this.b + 1) ? 1 / (this.b - this. a) : 0 
        })
    }
}