/**
 * ## Graph Service
 *
 * @author loseex
 */

import { Way } from "./graph";

export class GraphService {
  public arrayPoints: Way[] = [];

  // Todo: Сделать валидацию входных данных.

  private parseString(string: string): void {
    try {
      const current = string.replace(/\s/g, "").split(";");
      current.map((item) => {
        const object: Way = {
          from: item[1],
          to: item[3],
          weight: +item[5],
        };
        this.arrayPoints.push(object);
      });
      console.log(this.arrayPoints);
    } catch (err: unknown) {
      throw new Error((err as Error).message);
    }
  }

  public setup(args: string): boolean {
    try {
      this.parseString(args);
      return true;
    } catch (err: unknown) {
      return false;
    }
  }
}
