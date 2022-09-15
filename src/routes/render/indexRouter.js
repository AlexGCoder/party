import axios from 'axios';
import express from 'express';

const router = express.Router();


router.get('/', (req, res) => {
    res.render('Layout');
});
router.get('/byname', (req, res) => {
    res.render('Layout');
});
router.get('/byingridients', (req, res) => {
    res.render('Layout');
});



router.get('/123', async (req, res) => {
    try {
        const response = await axios.get('https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
        console.log(response.data);

    } catch (error) {

    }
    res.render('Layout');
});

export default router;
