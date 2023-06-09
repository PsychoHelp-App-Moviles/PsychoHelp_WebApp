export interface Appointment{
    id: number,
    meetUrl: string;
    psychologistId: number;
    patientId: number;
    scheduleDate: Date;
    personalHistory: string;
    motive: string;
    testRealized: string;
    treatment: string
}