
export const stringCompression = (word: string) => {

    let charactersArray: string[] = []
    let wordCharacter = word[0]
    let characterCount = 0

    for (const character of word) {
        if (character !== wordCharacter) {
            charactersArray.push(wordCharacter + characterCount)
            wordCharacter = character
            characterCount = 0
        }
        characterCount++
    }
    charactersArray.push(wordCharacter + characterCount)
    let result = ''
    for(const key of charactersArray){
        result+=key
    }
    if(result.length > word.length){
        return word
    }else{
        return result
    }
}