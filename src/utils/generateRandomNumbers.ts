export function generateRandomNumbers(size: number): Array<number> {
  const array = [...Array(size).keys()].map(
    (_, index) => Math.floor(Math.random() * 150) + 50
  )

  return array
}
