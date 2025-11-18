function vowelsAndConsonants(s) {
    const vowels = []
    const consonents = []

  for (let char of s) {
      if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
          vowels.push(char);
      } else {
          consonents.push(char)
    }
    }

    const finalArray = [...vowels, ...consonents]

    for (let char of finalArray) {
            console.log(`${char}`);
            
    }
    
}

vowelsAndConsonants("javascriptloops");