import { ID } from "./id"

export interface Vacation{
    id: ID,
    member_name: string,
    start_date : Date,
    end_date : Date,
    half_first: boolean,
    half_last: boolean,
    process_state: Boolean
}

export function createDefaultVacation(): Vacation {
    return {
        id: 0,
        member_name: '',
        start_date: new Date(),
        end_date: new Date(),
        half_first: false,
        half_last: false,
        process_state: false
    };
}
