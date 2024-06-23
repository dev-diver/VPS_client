import { ID } from "../id";
import { Vacation } from "../request/vacation";

export interface VacationPlan {
  approver_1 : ID,
  approver_final : ID,
  vacations: Vacation[],
}