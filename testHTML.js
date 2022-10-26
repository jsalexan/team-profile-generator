const cards = [];

function createHTML(totalTeam) {

   for (let i=0; i<totalTeam.length; i++) {
      
      if (totalTeam[i].getRole() === "Manager") {
         const createManagerCard = generateManager(totalTeam[i])
         cards.push(createManagerCard);
      }
      if (totalTeam[i].getRole() === "Engineer") {
         const createEngineerCard = generateEngineer(totalTeam[i])
         cards.push(createEngineerCard);
      }
      if (totalTeam[i].getRole() === "Intern") {
         const createInternCard = generateIntern(totalTeam[i])
         cards.push(createInternCard);    
      }
};
};

const createManager = function (manager) {
   return ` 
      <div class="card" style="width: 18rem;">
      <img src="./src/images/manager.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-title">${manager.getName()}</h1>
        <h2 class="card-text">Manager</h2>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${manager.getId()}</li>
        <li class="list-group-item">${manager.getEmail()}</li>
        <li class="list-group-item">${manager.getOfficeNumber()}</li>
      </ul>
    </div>
       `
      
    };
   
    const createEngineer = function (engineer) {
      return `
        <div class="card" style="width: 18rem;">
        <img src="./src/images/engineer.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h1 class="card-title">${engineer.getName()}</h1>
          <h2 class="card-text">Engineer</h2>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.getId()}</li>
          <li class="list-group-item">${engineer.getEmail()}</li>
          <li class="list-group-item">${engineer.getGitHub()}</li>
        </ul>
      </div>
         `
      };

      const createIntern = function (intern) {
         return `
           <div class="card" style="width: 18rem;">
           <img src="./src/images/intern.png" class="card-img-top" alt="Globe head with graduation cap">
           <div class="card-body">
             <h1 class="card-title">${intern.getName()}</h1>
             <h2 class="card-text">Intern</h2>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item">${intern.getId()}</li>
             <li class="list-group-item">${intern.getEmail()}</li>
             <li class="list-group-item">${intern.getSchool()}</li>
           </ul>
         </div>
            `
         };
   
   const allCards = cards.join('');


   const finalTeamPage = function (allCards) {   
   return`
   <!DOCTYPE html>
   <html lang="en">

   <head>
   <meta charset="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <title>Our Team</title>
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

   <body>
   ${allCards}
   </body>
   </html>
   `
   };

module.exports = createHTML
