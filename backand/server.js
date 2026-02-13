import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});
app.get('/apijokes', (req, res) => {

    const jokes = [
    
        {
            id: 1,
            title: 'A joke',
            content: 'Why don’t programmers like nature? Because it has too many bugs.'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'Why do Java developers wear glasses? Because they don’t see sharp.'
        },
        {
            id: 3,
            title: 'Coding joke',
            content: 'Debugging: Being the detective in a crime movie where you are also the murderer.'
        },
        {
            id: 4,
            title: 'Funny joke',
            content: 'I told my computer I needed a break, and it said: No problem — I’ll freeze.'
        },
        {
            id: 5,
            title: 'Last joke',
            content: 'There are only 10 types of people in the world: those who understand binary and those who don’t.'
        }
    ];

    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
