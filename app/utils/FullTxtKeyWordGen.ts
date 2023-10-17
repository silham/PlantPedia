const FullTxtKeyWordGen = (query: string) => {
  let keyWords = query.trim().replace(/ /g, " | ")
  return keyWords
}

export default FullTxtKeyWordGen