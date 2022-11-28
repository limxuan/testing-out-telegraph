import { Event } from "../structures/Event";
import { Message } from "../typings/Context";

export default new Event("text", (ctx) => {
    const message = ctx.message as Message;
});
