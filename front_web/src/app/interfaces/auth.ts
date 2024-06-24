import { Member } from "./member";

export interface Auth {
    member: Member;
    company_id: number;
    group_ids: number[];
}
