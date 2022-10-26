function createHTML(totalTeam) {
   let cards = []
   for (let i=0; i<totalTeam.length; i++)
   {
    let managerCard = `
      <div class="card" style="width: 18rem;">
      <img src="./src/images/manager.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-title">${totalTeam.getName()}</h1>
        <h2 class="card-text">${totalTeam.getRole()}</h2>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${totalTeam.getId()}</li>
        <li class="list-group-item">${totalTeam.getEmail()}</li>
        <li class="list-group-item">${totalTeam.getOfficeNumber()}</li>
      </ul>
    </div>
       `
       cards.push(employeeCard);
    }
   };
    {
      let engineerCard = `
        <div class="card" style="width: 18rem;">
        <img src="./src/images/engineer.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h1 class="card-title">${totalTeam.getName()}</h1>
          <h2 class="card-text">${totalTeam.getRole()}</h2>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${totalTeam.getId()}</li>
          <li class="list-group-item">${totalTeam.getEmail()}</li>
          <li class="list-group-item">${totalTeam.getGitHub()}</li>
        </ul>
      </div>
         `
      }
      {
         let internCard = `
           <div class="card" style="width: 18rem;">
           <img src="./src/images/intern.png" class="card-img-top" alt="Globe head with graduation cap">
           <div class="card-body">
             <h1 class="card-title">${totalTeam.getName()}</h1>
             <h2 class="card-text">${totalTeam.getRole()}</h2>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">${totalTeam.getId()}</li>
             <li class="list-group-item">${totalTeam.getEmail()}</li>
             <li class="list-group-item">${totalTeam.getSchool()}</li>
           </ul>
         </div>
            `
         }
   createHTML();

   let html = `
   <!DOCTYPE html>
   <html lang="en">

   <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Our Team</title>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

   <body>
   ${cards}
   </body>
   </html>
   `
   return html


module.exports = createHTML
