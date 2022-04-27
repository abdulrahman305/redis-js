import { Command } from "./command.ts";

export type ScriptFlushCommandOptions =
  | { sync: true; async?: never }
  | { sync?: never; async: true };

/**
 * @see https://redis.io/commands/script-flush
 */
export class ScriptFlushCommand extends Command<"OK", "OK"> {
  constructor(opts?: ScriptFlushCommandOptions) {
    const cmd = ["script", "flush"];
    if (opts?.sync) {
      cmd.push("sync");
    } else if (opts?.async) {
      cmd.push("async");
    }
    super(cmd);
  }
}
