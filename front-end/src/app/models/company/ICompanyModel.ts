import { IServiceType } from '../service-type/IServiceType';
import { ITagModel } from '../tag/ITagModel';

export interface ICompanyModel {
    id: string;
    identityNumber: string;
    name: string;
    title: string;
    dangerLevel: number;
    address: string;
    provience: string;
    city: string;
    phone: string;
    fax: string;
    latLong: string;
    taxOffice: string;
    taxNumber: string;
    totalPersonalCount: number;
    serviceTypes: Array<IServiceType>;
    keywords: Array<ITagModel>;
}
