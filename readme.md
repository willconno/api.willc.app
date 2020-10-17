### From Scratch

#### Install Node.js
Use your favourite package manager or:
```
yum -y install curl vi
curl -sL https://rpm.nodesource.com/setup_14.x | bash -
```
#### Create an express app.
unpacks into the current directory
```
npx express-generator --no-view
```
`--no-view` will stop the installation of pug (jade), the default frontend framework

typescript
```
npm i typescript -g
```
reload on code changes
```
npm i nodemon -g
```
aws lambda supoort
```
npm i aws-serverless-express
```
everything else
```
npm i helmet mysql2 sequelize
```
#### Middleware
remove the `public` directory and the static page middleware from app..js
```
import * as express from 'express';
import * as helmet from 'helmet';
let app = express();
app.use(helmet());
```
write a function to authenticate the caller before returning a response
```
app.use((req, res, next) => {
    const success = db.apiTokens.exists(req.headers.get("x-api-key"))
    if (success) {
        next()
    } else {
        res.send(401).send({"msg": "nah"})
    }
})
```
#### Testing locally
```
// app.local.js
import app from "./app";
app.listen(3000)

nodemon start build/app.local.js
```
