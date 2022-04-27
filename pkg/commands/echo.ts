import { Command } from "./command.ts";

/**
 * @see https://redis.io/commands/echo
 */
export class EchoCommand extends Command<string, string> {
  constructor(message: string) {
    super(["echo", message]);
  }
}
