import { Command } from "./command.ts";

/**
 * @see https://redis.io/commands/append
 */
export class AppendCommand extends Command<number, number> {
  constructor(key: string, value: string) {
    super(["append", key, value]);
  }
}
