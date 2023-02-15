const toPascalCase = (string) => {
    return string.replace(/\w+/g,
        (word) => {
            return word.charAt(0).toUpperCase() +
                word.substr(1).toLowerCase();
        }).replace('-', '');
}

exports.toPascalCaseFn = toPascalCase;

exports.page = name => `
    import React from 'react';
    const ${toPascalCase(name)} = ()=>{
        return (
            <div>${toPascalCase(name)}</div>
        )
    }
    export default ${toPascalCase(name)}
`

exports.less = name => `
  .${toPascalCase(name)}{

  }
`