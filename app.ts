import * as express from 'express';
import * as helmet from 'helmet';
import auth from "./middleware/auth";

let cookieParser = require('cookie-parser');
let logger = require('morgan');

let app = express();

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);

import * as indexRouter from "./routes/index"
app.use('/', indexRouter);

import * as postsRouter from "./routes/posts"
app.use("/posts", postsRouter);

import * as usersRouter from "./routes/users"
app.use("/users", usersRouter);

export default app;
