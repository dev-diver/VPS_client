import { ID } from "../id";
import { Vacation } from "../request/vacation";

export interface VacationPlan {
  approver_order: ID[],
  vacations: Vacation[],
}