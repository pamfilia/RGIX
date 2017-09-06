declare namespace mgt.rgix.template {
    export interface ITemplate<T> {
        renderTemplate(data:T): JSX.Element;
    }
}