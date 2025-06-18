
abstract class BaseStage {
  protected name: string;
  protected dependencies: string[];

  constructor(name: string, dependencies: string[] = []) {
    this.name = name;
    this.dependencies = dependencies;
  }

  abstract execute(context: ExecutionContext): Promise<StageResult>;

  protected async validate(context: ExecutionContext): Promise<boolean> {
    return true;
  }
}

export default BaseStage;
