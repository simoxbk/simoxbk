const dbconnexion = "mongodb+srv://simoxbk:OVNtxTyAhu3Hs9MI@cluster0.ts2gmbg.mongodb.net/authorDB?appName=Cluster0" 

const database = mongoose.connect(dbconnexion,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=> console.log("Database connected successfully"));
export default database;