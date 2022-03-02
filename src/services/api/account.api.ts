import { BaseDateTime } from '@type/common';
import { httpServiceWFile, httpServiceWToken } from '../axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

// Appointment List
export async function getAppointmentList({
    page = 0,
    size = 10,
    appointmentStartDateTime,
    appointmentEndDateTime,
}: {
    page?: number;
    size?: number;
    appointmentStartDateTime: BaseDateTime;
    appointmentEndDateTime: BaseDateTime;
}) {
    const { data } = await httpServiceWToken({
        url: `${BASE_URL}:8010/v1/admin/appointment/all`,
        method: 'POST',
        data: {
            size,
            page,
            appointmentStartDateTime,
            appointmentEndDateTime,
        },
    });

    return data;
}

// Account Opening Form - In Progress List
export async function getAccountOpeningInProgressList({
    englishName,
    idDocumentNumber,
    phoneNumber,
    page = 0,
    size = 10,
}: {
    englishName?: string;
    idDocumentNumber?: string;
    phoneNumber?: string;
    page?: number;
    size?: number;
}) {
    const { data } = await httpServiceWToken({
        url: `${BASE_URL}:8010/v1/admin/account-opening/in-progress-forms`,
        method: 'POST',
        data: {
            size,
            page,
            englishName,
            idDocumentNumber,
            phoneNumber,
        },
    });

    return data;
}

export async function removeAccountOpeningInProgressRecord(clientId: string) {
    const { data } = await httpServiceWToken({
        url: `${BASE_URL}:8010/v1/admin/account-opening/${clientId}`,
        method: 'DELETE',
    });
    return data;
}

// Account Opening Form - Approved List
export async function getAccountOpeningApprovedList(page: number = 0, size: number = 10) {
    const { data } = await httpServiceWToken({
        url: `${BASE_URL}:8010/v1/admin/account-opening/approved-forms`,
        method: 'POST',
        data: {
            size,
            page,
        },
    });

    return data;
}

// Account Opening Form - Get In Progress / Approved Form
export async function getAccountOpeningFormData(id: number) {
    const { data } = await httpServiceWToken({
        url: `${BASE_URL}:8010/v1/admin/account-opening/${id}`,
        method: 'GET',
    });

    return data;
}

// Account Opening Form - Application List
export async function getAccountOpeningApplicationList(
    startDateTime: BaseDateTime,
    endDateTime: BaseDateTime,
    page: number = 0,
    size: number = 10,
) {
    const { data } = await httpServiceWToken({
        url: `${BASE_URL}:8010/v1/admin/account-opening/in-progress/overview`,
        method: 'POST',
        data: {
            startDateTime,
            endDateTime,
            size,
            page,
        },
    });

    return data;
}

export async function getAccountOpeningApprovalFormData(id: number) {
    const { data } = await httpServiceWToken({
        url: `${BASE_URL}:8010/v1/admin/account-opening/request-form/${id}`,
        method: 'GET',
    });

    return data;
}

export async function postAccountOpeningForm(data) {
    const { data: response } = await httpServiceWToken({
        url: `${BASE_URL}:8010/v1/api/account-opening/confirm`,
        method: 'POST',
        data,
    });

    return response.data;
}

export async function uploadImage({ img, type }: any) {
    const { data } = await httpServiceWFile({
        url: `${BASE_URL}:8010/v1/admin/account-opening/upload-image`,
        method: 'POST',
        data: img,
    });

    return data;
}
