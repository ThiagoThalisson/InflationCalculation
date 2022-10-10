const brioche = 6.79
const italian = 25.9
const timeSpan = 1

const percentage = (value) => value / 100
const inflation = percentage(10)

function calculateConvidInflation(product) {
  const calculatedInflation = product * inflation
  const newPrice = calculatedInflation + product

  let cache = null
  for (let i = 1; i <= timeSpan; i++) {
    if (!cache) {
      cache = product + calculatedInflation
    } else {
      cache = cache++ + inflation
    }
  }
  console.log("value lost ", (cache - product).toFixed(2))

  return cache.toFixed(2)
}

const newBrioche = calculateConvidInflation(brioche)
const newItalian = calculateConvidInflation(italian)
console.log(newBrioche, newItalian)
