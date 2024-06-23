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

export function createDefaultVacationPlan(): VacationPlan {
  return {
    id: 0,
    member_id: 0,
    member_name: '',
    apply_date: new Date(),
    approve_date: new Date(),
    vacations: [
      {
        teamName: '',
        name: '',
        startDatetime: new Date(),
        endDatetime: new Date(),
        process: true
      }
    ],
    process_state: 0,
    cancel_state: 0
  };
}
