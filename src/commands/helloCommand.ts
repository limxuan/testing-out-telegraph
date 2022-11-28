import { Command } from "../structures/Command";

export default new Command({
    name: "hello",
    run: async (ctx) => {
        ctx.sendMessage("Hello World");
    }
});
