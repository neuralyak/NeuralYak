
import PipelineExecutor from '../executor';
import AnalyzeStage from './impl/analyzeStage';
import BackendStage from './impl/backendStage';
import FrontendStage from './impl/frontendStage';
import IntegrationStage from './impl/integrationStage';
import PolishStage from './impl/polishStage';

const registry = (executor: PipelineExecutor) => {
  const stages = [
    new AnalyzeStage('analyze'),
    new BackendStage('backend'),
    new FrontendStage('frontend'),
    new IntegrationStage('integration'),
    new PolishStage('polish')
  ];

  stages.forEach(stage => executor.registerStage(stage));
};

export default registry;
