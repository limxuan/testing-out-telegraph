import { Client } from "./structures/Client";
require("dotenv").config();

const client = new Client(process.env.botToken);
client.init();
