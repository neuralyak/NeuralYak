
import BaseStage from '../base/baseStage';
import { StageResult } from '../../types/stage';

class PolishStage extends BaseStage {
  async execute(context: ExecutionContext): Promise<StageResult> {
    const polishSpec = await context.router.invoke({
      model: 'deepseek',
      prompt: `Polish and finalize: ${context.prompt}`
    });

    return {
      status: 'completed',
      data: polishSpec,
      stage: 'polish'
    };
  }
}

export default PolishStage;
