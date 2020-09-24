import { Permission } from './permission';
import { RegUser } from './reg-user';

export interface UserPermission{
    id: number;
    regUser: RegUser
    permission: Permission
}