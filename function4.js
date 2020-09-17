function convertTemperature(temp, letter) {
  if(letter === 'c') {
    const temperature = (5/9) * (temp - 32)
    return temperature.toFixed(2)
  }
  if(letter === 'f') {
    const temperature = temp * 9 / 5 + 32
    return temperature.toFixed(2)
  }
}
