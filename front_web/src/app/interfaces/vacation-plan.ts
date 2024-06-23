import { ID } from "./id"
import { Vacation } from "./vacation"

export interface VacationPlan {
  id: ID,
  member_id: ID,
  member_name: string,
  apply_date: Date,
  approve_date: Date | null,
  vacations: Vacation[],
  process_state: number,
  cancel_state: number
}
