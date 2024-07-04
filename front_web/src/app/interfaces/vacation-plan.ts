import { ID } from "./id"
import { Vacation } from "./vacation"

export interface VacationPlan {
  id: ID,
  member_id: ID,
  member_name: string,
  apply_date: Date,
  approve_date: Date | null,
  approver_order : Approver[],
  vacations: Vacation[],
  approve_stage: number,
  reject_state: boolean,
  complete_state: boolean,
}

export interface Approver {
  id: ID,
  member_id: ID,
  member_name: string,
  order: number,
  descision_date: Date | null,
}
