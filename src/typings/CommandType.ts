import { TextContext } from "./Context";

export interface CommandType {
    name: string;
    run: (ctx: TextContext) => any;
}
