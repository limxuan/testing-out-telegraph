import { Update, Message as MessageType } from "telegraf/types";
import { Context } from "telegraf";

export type TextContext = Context<
    Update.MessageUpdate<MessageType.TextMessage>
>;

export interface Message {
    message_id: number;
    from: From;
    chat: Chat;
    date: number;
    text: string;
}

interface Chat {
    id: number;
    first_name: string;
    username: string;
    type: string;
}

interface From {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
    language_code: string;
}
