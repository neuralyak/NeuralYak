
import BaseStage from '../base/baseStage';
import { StageResult } from '../../types/stage';

class FrontendStage extends BaseStage {
  async execute(context: ExecutionContext): Promise<StageResult> {
    const frontendSpec = await context.router.invoke({
      model: 'llama3',
      prompt: `Generate frontend: ${context.prompt}`
    });

    return {
      status: 'completed',
      data: frontendSpec,
      stage: 'frontend'
    };
  }
}

export default FrontendStage;
