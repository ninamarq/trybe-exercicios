const convert = (valor: number, base: string) => {
  enum Conversão {
    km = 1000,
    hm = 100,
    dam = 10,
    m = 1,
    dm = 0.1,
    cm = 0.01,
    mm = 0.001,
  }
  return Conversão[base] * valor + 'm';
}

console.log(convert(56, 'dm'))