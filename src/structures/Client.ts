import { Telegraf } from "telegraf";
import glob from "glob";
import { promisify } from "util";
import { Event } from "../structures/Event";
import { CommandType } from "../typings/CommandType";

const globPromise = promisify(glob);

const importFile = async (filePath) => {
    return (await import(filePath))?.default;
};

export class Client extends Telegraf {
    public commands: Map<string, CommandType> = new Map();
    constructor(token: string) {
        super(token);
    }

    private async importFile(filePath: string) {
        return (await import(filePath))?.default;
    }

    public async init() {
        this.launch();
        const eventFiles = await globPromise(
            `${__dirname}/../events/*{.ts,.js}`
        );

        eventFiles.forEach(async (filePath) => {
            const event: Event = await importFile(filePath);
            console.log(event);

            this.on(event.event as any, event.run);
        });
    }
}
