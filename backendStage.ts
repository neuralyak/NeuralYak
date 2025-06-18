
import BaseStage from '../base/baseStage';
import { StageResult } from '../../types/stage';

class BackendStage extends BaseStage {
  async execute(context: ExecutionContext): Promise<StageResult> {
    const backendSpec = await context.router.invoke({
      model: 'claude',
      prompt: `Generate backend architecture: ${context.prompt}`
    });

    return {
      status: 'completed',
      data: backendSpec,
      stage: 'backend'
    };
  }
}

export default BackendStage;
