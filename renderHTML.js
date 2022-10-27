let cards = [];


const createManager = function (manager) {
   return ` 
      <div class="card" style="width: 18rem;">
      <img src="/src/images/manager.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-title">${manager.getName()}</h1>
        <h2 class="card-text">Manager</h2>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID #${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
       `  
    };
   
const createEngineer = function (engineer) {
    return `
      <div class="card" style="width: 18rem;">
      <img src="/src/images/engineer.png" class="card-img-top" alt="...">
      <div class="card-body">
          <h1 class="card-title">${engineer.getName()}</h1>
          <h2 class="card-text">Engineer</h2>
      </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID #${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: ${engineer.getGitHub()}</li>
        </ul>
      </div>
         `
      };

const createIntern = function (intern) {
    return `
      <div class="card" style="width: 18rem;">
          <img src="/src/images/intern.png" class="card-img-top" alt="Globe head with graduation cap">
          <div class="card-body">
             <h1 class="card-title">${intern.getName()}</h1>
             <h2 class="card-text">Intern</h2>
          </div>
          <ul class="list-group list-group-flush">
             <li class="list-group-item">Employee ID #${intern.getId()}</li>
             <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
             <li class="list-group-item">School: ${intern.getSchool()}</li>
          </ul>
      </div>
            `
         };
   
    const createHTML = totalTeam => {
      for (let i=0; i<totalTeam.length; i++) {
         
         if (totalTeam[i].getRole() === "Manager") {
            const createManagerCard = createManager(totalTeam[i])
            cards.push(createManagerCard);
         }
         if (totalTeam[i].getRole() === "Engineer") {
            const createEngineerCard = createEngineer(totalTeam[i])
            cards.push(createEngineerCard);
         }
         if (totalTeam[i].getRole() === "Intern") {
            const createInternCard = createIntern(totalTeam[i])
            cards.push(createInternCard);    
         }     
   };
   return cards
   };  
  
   const finalTeamPage = function (cards) {   
   return `
   <html lang="en">

   <head>
       <meta charset="UTF-8"/>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       <title>Our Team</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
       <body>
           <main class="container">
               <section class="row">
                   <div class="col-12 jumbotron mb-3">
                       <h2>Our Team</h2>  
                   </div>

               <section class="row justify-content-around">
                   ${cards.map(card => card)}
               </section>
                      
           </main>     
       </body>       
   </head>
</html>
   `
   };

module.exports = { createHTML, finalTeamPage, createManager, createEngineer, createIntern, cards }
