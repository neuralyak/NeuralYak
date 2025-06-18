
export class RetryManager {
  private maxRetries: number;
  private baseDelay: number;

  constructor(maxRetries = 3, baseDelay = 1000) {
    this.maxRetries = maxRetries;
    this.baseDelay = baseDelay;
  }

  async retry<T>(fn: () => Promise<T>): Promise<T> {
    let retries = 0;
    let lastError: Error | null = null;

    while (retries <= this.maxRetries) {
      try {
        return await fn();
      } catch (err) {
        lastError = err as Error;
        if (retries === this.maxRetries) throw lastError;
        await new Promise(resolve => setTimeout(resolve, this.baseDelay * 2 ** retries));
        retries++;
      }
    }
  }
}
