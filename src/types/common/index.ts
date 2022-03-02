export type BaseDateTime = {
    instant: string;
    zoneId: string;
};

export enum StatusEnum {
    ALL = 'ALL',
    NONE = 'NONE',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
    PENDING = 'PENDING',
}

export enum ActionEnum {
    APPROVE = 'APPROVE',
    UPDATE = 'UPDATE',
    REJECT = 'REJECT',
    RESUBMIT = 'RESUBMIT',
}