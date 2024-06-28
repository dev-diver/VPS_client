import { ID } from "../id";
import { Vacation } from "../request/vacation";

export interface VacationPlan {
  approvers: ID[],
  vacations: Vacation[],
}