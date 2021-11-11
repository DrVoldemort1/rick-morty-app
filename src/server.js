const app = express();

app.use(express.static(__dirname+'/dist/rick-morty-app'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/rick-morty-app/index.html'));
});

app.listen(process.env.PORT || 8080);