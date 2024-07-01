import { Member } from "./member";

export interface Organize {
    organize_id: number;
    parent_id: number;
    organize_name: string;
    children: Organize[];
    members: Member[];
}
