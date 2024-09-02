const mongoose  = require("mongoose")

const connection = mongoose.connect("mongodb+srv://deepak:pandey@cluster0.dmfiyqs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


module.exports = {connection}