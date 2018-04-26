import { IServiceType } from '../service-type/IServiceType';
import { IProposalModel } from '../proposal/IProposal';

export interface IInterviewModel {
    id: string;
    name: string;
    interviewee: string;
    interviewed: string;
    interviewDate: string;
    interviewNote: string;
    interviewReminderDate: string;
    interviewReminderNote: string;
    reminderClosingDate: string;
    reminderClosingNote: string;
    serviceTypes: Array<IServiceType>;
    proposalDetail: Array<IProposalModel>;
}
