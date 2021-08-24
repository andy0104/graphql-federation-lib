// In-memory cache implementation

export class CacheHelper {
  private static cache: any = {};

  constructor() {}

  public static add(key: string, val: any) {
    this.cache[key] = JSON.stringify(val);
    console.log(this.cache);
    return true;
  }

  public static get(key: string) {
    return this.cache[key] ? JSON.parse(this.cache[key]) : null;
  }

  public static remove(key: string) {
    return this.cache[key] ? delete this.cache[key] : false;
  }

  public static clear() {
    this.cache = {};
  }
}