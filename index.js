let express = require(`express`);
let app = express();
let cors = require('cors')
let port = 3000;

let vse= null;



app.use(cors())
app.use(express.json())
app.use(express.static('public'));



// Настройка БД
let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Coin');

// Схемы
let schema1 = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    pasworld: {
        type: String,
        required: true,
        
    },
    svazi: {
        type: Number,
    },
});

let schema = new mongoose.Schema({
    name: String,
    bondycoin: Number, 
    dycoin: Number,  
    bust1: Number,
    bust2: Number,
    bust3: Number,
    bust4: Number,
    bust5: Number,
    bust6: Number,
    price1: Number,
    price2: Number,
    price3: Number,
    price4: Number,
    price5: Number,
    price6: Number,
    rest: Number,
    pricerest: Number,
    id: Number,
    
    __v: Number
});

let Login = mongoose.model('login', schema1);
let Bondy = mongoose.model('bondy', schema);


//все пользователи кол-во

    
async function Nacxa() {
    let data = await Bondy.find();
vsu= data.length;
console.log(vsu)
}
Nacxa()    
   
 //удаление аккаунта
app.put(`/delete`, async function (req, res){
    let id = req.body.id
    console.log(id)
    //undefiend
    let data = await Login.deleteOne({ "svazi": id})
    res.send(data)
});
 
// список
app.get(`/usersD`, async function (req, res) {
    
    let data = await Bondy.find().sort({"dycoin": -1}).limit(100);
    res.send(data);
});
app.get(`/usersB`, async function (req, res) {
    
    let data = await Bondy.find().sort({"bondycoin": -1}).limit(100);
    res.send(data);
});

app.post(`/reg`, async function (req, res) {
let regi = req.body.login
let bo = await Login.exists({login: regi});
   if(!bo){
     res.send("")
    }else {res.send("такой логин есть")}
});
// регестрация 
app.post(`/register`, async function (req, res) {
   let regi = req.body.login;
   let parol = req.body.pasworld;
   let name1 = req.body.name1;
   let bo = await Login.exists({login: regi});
   if(!bo){vsu++
    let bondy = new Bondy({
     name: name1,
     bondycoin:0,
     dycoin:0,
     bust1: 0,
     bust2: 0,
     bust3: 0,
     bust4: 0,
     bust5: 0,
     bust6: 0,
     price1: 300,
     price2: 1000,
     price3: 10000,
     price4: 75000,
     price5: 1000000,
     price6: 10000000,
     rest: 0,
     bondycoin: 0,
     pricerest: 1000000000,
     id: vsu,
     });
     await bondy.save();
     let login = new Login({
         login: regi,
         pasworld: parol,
         svazi: vsu
     })
     await login.save();
     res.send("аккаунт зарегестрирован")
    }else {res.send("такой логин есть")}
   
});

//вход
app.post('/login', async function(req, res) {
let regi = req.body.login;
let parol = req.body.pasworld;

let user = await Login.findOne({"login": regi})
if (user == null){
    res.send('неверный логин')
} else {
    if (user.pasworld==parol){
        let use = await Bondy.findOne({"id": user.svazi})
        res.send(use)
    } else {
        res.send('неверный пароль')
    }
}
console.log(user)

});

// клик
app.put(`/click`, async function (req, res) {
    let id = req.body.id;
     
    let data = await Bondy.findOne({"id": id}); 
    
    let click = 1 +data.bust1+ data.bust2*5 + data.bust3*20 + data.bust4*100 + data.bust5*500 + data.bust6* 2500
    data.dycoin = data.dycoin + click
    await data.save()
    res.send(data)
});

// рест
app.put(`/rest`, async function (req, res) {
    let id = req.body.id;
     
    let data = await Bondy.findOne({"id": id}); 
    if(data.dycoin>=data.pricerest){
        data.dycoin= data.dycoin-data.pricerest
        data.rest++;
        data.bust1=0;
        data.bust2=0;
        data.bust3=0;
        data.bust4=0;
        data.bust5=0;
        data.bust6=0;
        await data.save()
        res.send(data);
    }
});

// бусты магазина
app.put(`/bust1`, async function (req, res) {
    let id = req.body.id;
     
    let data = await Bondy.findOne({"id": id}); 
    if(data.dycoin>=data.price1){
        data.dycoin= data.dycoin-data.price1
        data.bust1++;
        data.price1= data.price1*2
        await data.save()
        res.send(data);
    }
});
app.put(`/bust2`, async function (req, res) {
    let id = req.body.id;
     
    let data = await Bondy.findOne({"id": id}); 
    if(data.dycoin>=data.price2){
        data.dycoin= data.dycoin-data.price2
    data.bust2++;
    data.price2= data.price1*2
    await data.save()
    res.send(data);
    }
});
app.put(`/bust3`, async function (req, res) {
    let id = req.body.id;
     
    let data = await Bondy.findOne({"id": id}); 
    if(data.dycoin>=data.price3){
        data.dycoin= data.dycoin-data.price3
    data.bust3++;
    data.price3= data.price3*2
    await data.save()
    res.send(data);
    }
});
app.put(`/bust4`, async function (req, res) {
    let id = req.body.id;
     
    let data = await Bondy.findOne({"id": id}); 
    if(data.dycoin>=data.price4){
        data.dycoin= data.dycoin-data.price4
    data.bust4++;
    data.price4= data.price4*2
    await data.save()
    res.send(data);
    }
});
app.put(`/bust5`, async function (req, res) {
    let id = req.body.id;
     
    let data = await Bondy.findOne({"id": id}); 
    if(data.dycoin>=data.price5){
        data.dycoin= data.dycoin-data.price5
    data.bust5++;
    data.price5= data.price5*2
    await data.save()
    res.send(data);
    }
});
app.put(`/bust6`, async function (req, res) {
    let id = req.body.id;
     
    let data = await Bondy.findOne({"id": id}); 
    if(data.dycoin>=data.price6){
        data.dycoin= data.dycoin-data.price6
    data.bust6++;
    data.price6= data.price6*2
    await data.save()
    res.send(data);
    }
});

app.listen(port, function () {
    console.log(`Сервер запущен: http://localhost:${port}`)
});
