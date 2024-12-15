
export enum UserRoles {
    Admin='admin',
    Employee='employee',
    Customer='customer',
}

export interface Users {
    id:string,
    username:string,
    email:string,
    password:string,
    role:UserRoles,
}

export interface Customers {
    id:string,
    userId:string,
    firstName:string,
    lastName:string,
    contactNumber:string,
    registrationDate?:string,
    loyaltyPoints?:number,
    isNumberVerified?:number,
}

export interface Employees {
    id:string,
    userId:string,
    firstName:string,
    lastName:string,
    contactNumber:string,
    hiredate?:string,
    isNumberVerified?:number,
}
