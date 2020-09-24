import { UserPermission } from "./user-permission";

export interface RegUser{
    id: number
    username: String
    password: String
    email: String
    userPermission: UserPermission
}