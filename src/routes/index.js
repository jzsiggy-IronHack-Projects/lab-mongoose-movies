const { Celebrities } = require('../models')

const home = (request, response, next) => {
  Celebrities.find( { } )
  .then(celebs => {
    response.render("celebs", { celebs });
  });
};

const celeb = (request, response, next) => {
  const id = request.params.id;
  Celebrities.findById(id)
  .then(celeb => {
    response.render("celebDetails", { celeb })
  })
  .catch(err => {
    console.log(err);
  });
};

const newCeleb = (request, response, next) => {
  response.render("celebForm")
};

const postNewCeleb = (request, response, next) => {
  const newCeleb = request.body;
  Celebrities.create(newCeleb)
  .then(feedBack => {
    console.log(feedBack);
    response.redirect("/");
  })
  .catch(err => {
    console.log(err);
  });
};

const deleteCeleb = (request, response, next) => {
  const id = request.params.id;
  Celebrities.deleteOne( { _id : id } )
  .then(feedBack => {
    console.log(feedBack);
    response.redirect("/");
  })
  .catch(err => {
    console.log(err);
  });
};

const editCeleb = (request, response, next) => {
  const id = request.params.id;
  Celebrities.findById(id)
  .then(celeb => {
    console.log(celeb);
    response.render("editForm", { celeb });
  });
};

const postUpdatedCeleb = (request, response, next) => {
  const id = request.params.id;
  const { name , occupation , catchPhrase } = request.body;
  Celebrities.updateOne({ _id : id } , { "name" : name , "occupation" : occupation , "catchPhrase" : catchPhrase })
  .then(feedBack => {
    response.redirect(`/celebs/list/${id}`);
  });
}

module.exports = {
  home, 
  celeb,
  newCeleb,
  postNewCeleb,
  deleteCeleb,
  editCeleb,
  postUpdatedCeleb,
}