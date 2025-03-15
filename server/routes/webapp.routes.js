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



export default router;