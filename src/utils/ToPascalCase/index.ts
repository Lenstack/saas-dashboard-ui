export const toPascalCase = (str: string) =>
    str.replace(/(\w)(\w*)/g, (_, firstChar, rest) =>
        firstChar.toUpperCase() + rest.toLowerCase()).replace(/\s/g, '')