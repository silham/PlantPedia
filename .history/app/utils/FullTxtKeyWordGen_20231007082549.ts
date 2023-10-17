import React from 'react'

const FullTxtKeyWordGen = (query: string) => {
  let keyWords = query.replace(/ /g, " | ")
  return keyWords
}

export default FullTxtKeyWordGen