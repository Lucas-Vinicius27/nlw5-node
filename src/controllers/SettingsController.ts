import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {
    async create(req: Request, res: Response) {
        const { chat, username } = req.body;
        const settingsRepository = getCustomRepository(SettingsRepository);
        const settings = settingsRepository.create({
            username,
            chat
        });

        await settingsRepository.save(settings);

        res.json({
            message: "Successfully Created!",
            data: settings
        });
    }
}

export { SettingsController };
