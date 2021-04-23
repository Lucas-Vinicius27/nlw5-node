import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.get("/settings/:username", settingsController.findByUsername);
routes.post("/settings", settingsController.create);
routes.put("/settings/:username", settingsController.update);

routes.post("/user", usersController.create);

routes.get("/messages/:id", messagesController.showByUser);
routes.post("/messages", messagesController.create);

export { routes };
