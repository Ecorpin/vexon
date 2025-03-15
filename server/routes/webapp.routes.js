import { Router } from 'express';
import path from 'path';

const router = Router();



router.get("/", async (req, res) => {
    // Render the 'index.ejs' view (you can also pass dynamic data)

    const context = {
        title: 'Home Page'
    };

    res.render('index', context);
});

router.get("/about", async (req, res) => {
    // Render the 'index.ejs' view (you can also pass dynamic data)

    const context = {
        title: 'About Us'
    };

    res.render('about', context);
});



export default router;