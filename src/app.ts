import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes';
import 'dotenv/config'

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configuration();
    this.middlewares();
    this.routes();
  }

  public configuration() {
    this.app.set('port', process.env.PORT || 3000);
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.get('/', (request: Request, response: Response) => {
      response.json({ msg: "Serve Online! 😎" });
    });
    this.app.use(router);
  }

  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening http://localhost:${this.app.get('port')}`);
    })
  }
}

export { Server }
