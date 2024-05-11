import {Router} from 'express';
const router = Router();
router.get('/', (req, res) => {
    res.render('index',{title: 'Sistema-Epv'});
});
router.get('/about', (req, res) => { res.render('about',{title: 'Epv-Sobre nosotros'}); });
router.get('/contact', (req, res) => { res.render('contact',{title: 'Epv-Contacto'}); });
export default router;