
export interface StageResult {
  status: ExecutionStatus;
  data: any;
  stage: string;
}

export interface ExecutionContext {
  prompt: string;
  router: ModelRouter;
  buildId: string;
  tenantId: string;
}

export enum ExecutionStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  FAILED = 'failed'
}

export interface PipelineExecution {
  id: string;
  status: ExecutionStatus;
  stages: StageExecution[];
  createdAt: Date;
  updatedAt: Date;
}

export interface StageExecution {
  stage: string;
  status: ExecutionStatus;
  data: any;
  startedAt: Date;
  completedAt: Date | null;
}
