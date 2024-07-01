import { Member } from "./member";

export interface Organize {
    id: number;
    parent_id: number;
    name: string;
    children: Organize[];
    members: Member[];
}
