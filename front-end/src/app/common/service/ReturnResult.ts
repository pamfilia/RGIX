export class ReturnResult<T> {
    resultType: Number;
    resultValue: T[];
    requestContinuation: string;
    humanReadableMessage: string[];
    totalRecordCount: Number;
}
