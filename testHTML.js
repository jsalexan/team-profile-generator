function createHTML(totalTeam) {
   let cards = []
   for (let i=0; i<totalTeam.length; i++)
   {
    let card = `
    <h1>${totalTeam[i].name}</h1>
    <p>${totalTeam[i].id}</p>
    `
    cards.push(card);
   }

   let html = `
   <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    ${cards}
    </body>
    </html>
   `
   return html
};

module.exports = createHTML;
