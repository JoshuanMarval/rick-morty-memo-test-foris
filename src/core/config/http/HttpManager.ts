export default abstract class HttpManager {
   abstract get<T, B = undefined, O = undefined>(
      url: never,
      body?: B,
      opts?: O,
   ): Promise<T>;

   abstract post<T, B = undefined, O = undefined>(
      url: never,
      body?: B,
      opts?: O,
   ): Promise<T>;
}
