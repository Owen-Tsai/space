export const importAll = (r: any) => {
  r.keys().forEach(r)
}

export const isMobileDevice = () => {
  return /Android|Mobi/i.test(navigator.userAgent)
}