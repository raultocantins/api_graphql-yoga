const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://<User>:<Password>@cluster0.ebc1x.mongodb.net/<Database>?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const db=mongoose.connection
module.exports=db