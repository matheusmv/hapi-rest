const mongoose = require('mongoose');

const uri = "db-url";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
