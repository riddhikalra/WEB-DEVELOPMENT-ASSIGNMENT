const Blog = require('./models/blog');

const posts = [
    {
        title: 'MOTIVATION',
        author: 'Riddhi',
        description: 'WORK HARD AND ACHIEVE YOUR GOALS.DONOT LOOK BACK.'
    },
];

const seedDB = async ()=>{
    await Blog.deleteMany({});

    await Blog.insertMany(posts);
    console.log('DB Seeded')
}

module.exports = seedDB;

