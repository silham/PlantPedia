const FullTxtKeyWordGen = (query: string) => {
  query= query.trim()
  let keyWords = query.replace(/ /g, " | ")
  return keyWords
}

export default FullTxtKeyWordGen