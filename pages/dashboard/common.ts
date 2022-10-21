export const paseDate = (val) => {
  val = val * 1
  let time = new Date(val)
  let y = time.getFullYear();
  let m = time.getMonth() + 1
  let d = time.getDate()
  let h = time.getHours()
  let mm = time.getMinutes()
  let s = time.getSeconds()
  return `${y}-${checkAddZero(m)}-${checkAddZero(d)} ${checkAddZero(h)}:${checkAddZero(mm)}:${checkAddZero(s)}`
}

export const checkAddZero = (m) => {
  return m < 10 ? '0' + m : m
}

