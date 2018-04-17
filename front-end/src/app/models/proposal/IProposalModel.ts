import { IServiceType } from '../service-type/IServiceType';

export interface IInterviewModel {
    id: string;
    proposer: string;
    proposerDate: string;
    serviceTypes: Array<IServiceType>;
}
