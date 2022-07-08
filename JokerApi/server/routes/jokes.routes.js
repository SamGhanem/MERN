const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/Joke', JokeController.findAllJokes);
    app.get('/api/Joke/:id', JokeController.findOneSingleJoke);
    app.put('/api/Joke/:id', JokeController.updateExistingJoke);
    app.post('/api/Joke', JokeController.createNewJoke);
    app.delete('/api/Joke/:id', JokeController.deleteAnExistingJoke);
}
