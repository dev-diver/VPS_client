import { ID } from "./id"

export interface Vacation{
    id: ID,
    member_name: string,
    start_date : Date,
    end_date : Date,
    half_first: boolean,
    half_last: boolean,
    approve_stage: number,
    reject_state: boolean,
}
