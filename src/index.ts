import { ExponentialDistribution } from '@distributions/exponential.distribution';
import { NormalDistribution } from '@distributions/normal.distribution';
import { UniformDistribution } from '@distributions/uniform.distribution';

import BasicNumberGenerator from '@generators/basic.generator';
import { ExponentialNumberGenerator } from '@generators/exponential.generator';
import { NormalNumberGenerator } from '@generators/normal.generator';

import { UniformNumberGenerator } from '@generators/uniform.generator';
import { newPlot, Data } from 'plotly.js-dist-min';

import { variance, mean } from 'mathjs'


const renderExponential = (lambda = 2) => {
  const values = BasicNumberGenerator.generate(10000)

  const exponentialNumberGenerator = new ExponentialNumberGenerator(lambda)

  const generatedNumbers = exponentialNumberGenerator.generate(values)

  const histogram: Data[] = [
    {
      x: generatedNumbers,
      type: 'histogram',
    }
  ]

  const exponentialDistribution = new ExponentialDistribution(lambda)

  const dist = exponentialDistribution.pdf(values)

  const pdf: Data[] = [
    {
      y: dist,
      type: 'scatter'
    }
  ]

  const chi2 = generatedNumbers.reduce((acc, _, i) => {
    return acc + (((generatedNumbers[i] - dist[i]) ** 2) / dist[i])
  }, 0)

  console.log(chi2);
  

  document.querySelector('.exp-lambda-value')!.textContent = `Lambda: ${lambda}`
  document.querySelector('.exp-mean-value')!.textContent = `Mean: ${mean(generatedNumbers)}`
  document.querySelector('.exp-variance-value')!.textContent = `Variance: ${variance(generatedNumbers)}`

  newPlot('exp-histogram', histogram);
  newPlot('exp-pdf', pdf)
}

const renderNormal = () => {
  const values = BasicNumberGenerator.generate2d(10000, 12)

  const normalNumberGenerator = new NormalNumberGenerator(0.5, 2)

  const generatedNumbers = normalNumberGenerator.generate(values)

  const histogram: Data[] = [
    {
      x: generatedNumbers,
      type: 'histogram'
    }
  ]

  const normalDistribution = new NormalDistribution()

  const pdf: Data[] = [
    {
      y: normalDistribution.pdf(BasicNumberGenerator.generate(10000)),
      type: 'scatter',
    }
  ]

  document.querySelector('.norm-mean-value')!.textContent = `Mean: ${mean(generatedNumbers)}`
  document.querySelector('.norm-variance-value')!.textContent = `Variance: ${variance(generatedNumbers)}`

  newPlot('norm-histogram', histogram)
  newPlot('norm-pdf', pdf)
}

const renderUniform = () => {
  const values = BasicNumberGenerator.generate(10000, 0, 2 ** 31)

  const uniformNumberGenerator = new UniformNumberGenerator(5 ** 13, 2 ** 31)

  const generatedNumbers = uniformNumberGenerator.generate(values)

  const histogram: Data[] = [
    {
      x: generatedNumbers,
      type: 'histogram'
    }
  ]

  const uniformDistribution = new UniformDistribution(4, 7)

  const pdf: Data[] = [
    {
      y: uniformDistribution.pdf(BasicNumberGenerator.generate(10000, 0, 15)),
      type: 'scatter'
    }
  ]

  newPlot('uni-histogram', histogram)
  newPlot('uni-pdf', pdf)
}

renderExponential()
renderNormal()
renderUniform()

const lambdaSlider = document.querySelector('.exp-lambda-slider')

lambdaSlider?.addEventListener('input', (event) => {
  const target = event.target as HTMLInputElement
  renderExponential(Number(target.value))
})

