import * as React from "react";
import * as ReactDOM from "react-dom";

export abstract class BaseComponent<PropType,SeType> extends React.PureComponent<PropType,SeType>{
     async sleep(milliseconds: Number): Promise<void> {
        return new Promise<void>(resolve => {
                setTimeout(() => {
                    resolve(null);
                }, milliseconds);
            });
    }
    
}