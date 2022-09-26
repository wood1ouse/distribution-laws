import { RandomNumberGenerator } from "@models/generator.model";

import { random, range } from "lodash";

class BasicNumberGenerator implements RandomNumberGenerator {
    constructor() { }

    generate(n: number, from=0, to=1): number[] {
        const values: number[] = []

        range(0, n).forEach(() => {
            values.push(random(from, to, true))
        })

        return values.sort()
    }

    generate2d(n: number, v: number): number[][] {
        const values: number[][] = []

        range(0, n).forEach(() => {
            values.push(this.generate(v))
        })

        return values.sort()
    }
}

export default new BasicNumberGenerator()