const { Celebrities } = require('../models');
const { mongooseConnect } = require('../controllers');

mongooseConnect()

const seed = () => {

  const celebs = [
    { 
      name : "JukaBala",
      occupation : "Aluninho IH",
      catchPhrase : "Salve Salve Mlkada DOIDJA",
    }, 
    {
      name : "Victor Nevola",
      occupation : "Informador de Informações",
      catchPhrase : "Salve meu nome Eh viCtór Névola",
    }, 
    {
      name : "Coe",
      occupation : "Pai",
      catchPhrase : "Não use JqUeRy",
    }, 
  ]

  Celebrities.create(celebs)
  .then(feedback => {
    console.log(feedback);
  })
  .catch(err => {
    console.log(err);
  });

};

seed()