import { Context } from "telegraf";

export class Event {
    constructor(public event: string, public run: (context: Context) => any) {}
}
