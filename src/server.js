import express from 'express'
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import jsxRender from './utils/jsxRender';
import path from 'path';

import indexRouter from './routes/render/indexRouter';

const app = express();
const PORT = 3001;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));
const FileStore = store(session);

app.use(morgan('dev'));


const sessionConfig = {
    name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
    store: new FileStore(),
    secret: process.env.SESSION_SECRET ?? 'oh klahoma', // Секретное слово для шифрования, может быть любым
    resave: false, // Пересохранять ли куку при каждом запросе
    saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
    cookie: {
        maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
        httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
    },
};

app.use(session(sessionConfig));

app.use(async (req, res, next) => {
    res.locals.path = req.originalUrl;
    res.locals.userSession = req.session?.userSession;
    // const allCategories = await Category.findAll();
    // res.locals.allCategories = allCategories;
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', indexRouter);
// app.use('/api/v1', apiRouter);

app.listen(PORT, () => {
    console.log(`server started PORT: =======>>>>>>>> ${PORT}`);
});
