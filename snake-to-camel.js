function snakeToCamel(str) {
    words = str.split("_")
    result = words[0]

    for(i = 1;i<words.length;i++)
    {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1)
        result += words[i]
    }

    return result
}

