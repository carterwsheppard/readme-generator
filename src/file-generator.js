
module.exports = templateData => {
     return `
            <h1><a href="https://github.com/${
              templateData.github
            }">GitHub Link</a></h1>

    Project Title: ${templateData.title}
    Description: ${templateData.desc}

    `;
  };