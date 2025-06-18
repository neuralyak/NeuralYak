
export class TimeoutManager {
  private timeout: number;

  constructor(timeout = 30000) {
    this.timeout = timeout;
  }

  createAbortController(): AbortController {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), this.timeout);
    return controller;
  }
}
