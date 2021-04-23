import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(req: Request, res: Response) {
        const { chat, username } = req.body;
        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.create({ chat, username });

            res.sendStatus(201).json({
                message: "Successfully Created!",
                data: settings
            });
        } catch (e) {
            return res.status(400).json({ "message": e.message });
        }
    }

    async findByUsername(req: Request, res: Response) {
        const { username } = req.params;
        const settingsService = new SettingsService();
        const settings = await settingsService.findByUsername(username);

        res.status(200).json({
            message: "Successfully!",
            data: settings
        });
    }

    async update(req: Request, res: Response) {
        const { username } = req.params;
        const { chat } = req.body;
        const settingsService = new SettingsService();
        await settingsService.update(username, chat);

        res.status(200).json({
            message: "Successfully updated!",
        });
    }
}

export { SettingsController };
