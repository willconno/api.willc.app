import { Response, Request } from 'express';
import * as express from "express";

let router = express.Router();

router.get('/', function(req: Request, res: Response, next: Function) {
  res.json({"success": true})
});

export = router;
