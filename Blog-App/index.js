const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require('path');
const Blog=require('./models/blog');
const { title } = require("process");
const methodOverride=require('method-override');
const seedDB = require("./seed");

mongoose.connect('mongodb://localhost:27017/blogdb')
.then(()=> console.log('DB connected'))
.catch((err)=> console.log(err));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

//seedDB();

app.get('/',(req,res)=>{
    res.send("Connected");
})

app.get('/blogs',async(req,res)=>{
    const blogs=await Blog.find({});
    res.render('index',{blogs});
});
//form for new blog
app.get('/blogs/new',(req,res)=>{
    res.render('new');
});
//creating new blog
app.post('/blogs',async(req,res)=>{
    const {title,author,descrption}=req.body;
    await Blog.create({title,author,descrption});
    res.redirect('/blogs')
})

//views blog
app.get('/blogs/:id',async(req,res)=>{
    const {id} = req.params;
    const blog = await Blod.findById(id);
    res.render('show', {blog});
})

//edit blog
app.get('/blogs/:id/edit', async (req, res)=>{
    const {id} = req.params;
    const blog = await Blog.findById(id);

    res.render('edit', {blog});
})
//updating
app.patch('/blogs/:id', async (req, res)=>{

    const {id} = req.params;

    const updatedBlog = req.body;

    await Blog.findByIdAndUpdate(id, updatedBlog);

    res.redirect('/blogs')

})

//delete certain blog
app.delete('/blogs/:id', async (req, res)=>{
    const {id} = req.params;

    await Blog.findByIdAndDelete(id);

    res.redirect('/blogs')
})


app.listen(2323,()=>{
    console.log('server running at 2323');
})