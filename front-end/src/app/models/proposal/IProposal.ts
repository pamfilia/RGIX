import { IServiceType } from '../service-type/IServiceType';

export interface IProposalModel {
    id: string;
    proposer: string;
    proposalDate: string;
    serviceTypes: Array<IServiceType>;
}
