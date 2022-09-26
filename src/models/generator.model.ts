export interface RandomNumberGenerator {
    generate(n: number): number[];
}

export interface FormulaRandomNumberGenerator{
    generate(values: number[] | number[][]): number[]
}