import { ID } from "./id"
import { Vacation } from "./vacation"

export interface VacationPlan {
  id: ID,
  member_id: ID,
  member_name: string,
  apply_date: Date,
  approve_date: Date | null,
  approver_1: ID,
  approver_final: ID,
  approver_1_name: string,
  approver_final_name: string,
  vacations: Vacation[],
  process_state: number,
  cancel_state: number
}
