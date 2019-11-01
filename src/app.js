const { mongooseConnect } = require('./controllers')
const { home , celeb , newCeleb , postNewCeleb , deleteCeleb , editCeleb , postUpdatedCeleb } = require('./routes')

const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');
app.set(express.static(`${__dirname}/public`));
app.set('views', `${__dirname}/views`);
app.use(bodyParser.urlencoded( { extended : true } ));

mongooseConnect();

app.get("/", home);

app.get("/celebs/list/:id", celeb);

app.get("/celebs/new", newCeleb);

// app.get("/celebs/:id/edit", editCeleb);

app.post("/celebs", postNewCeleb);

app.post("/celebs/:id/delete", deleteCeleb);

app.get("/celebs/:id/edit", editCeleb);

app.post("/celebs/:id/edit", postUpdatedCeleb);


app.listen(3000, () => {
  console.log("MoViE ApP LiStEnInG On PoRt 30o0")
});



