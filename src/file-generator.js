
module.exports = templateData => {
     return `
    [Github Link](https://github.com/${
        templateData.github
        })

    Project Title: ${templateData.title}
    Description: ${templateData.desc}

    `;
  };