
module.exports = templateData => {
     return `
    Project Title: ${templateData.title}

    Description: ${templateData.description}

    Installation: ${templateData.install}
    
    Usage: ${templateData.usage}
    
    License: ${templateData.licenses}
    
    Contributing: ${templateData.contribute}
    
    Tests: ${templateData.test}
    
    Questions: 
    
    For future questions, feel free to reach out via Github or email.

    Name: ${templateData.name}

    Github: (https://github.com/${templateData.github})

    Email: ${templateData.email}
      `;
  };