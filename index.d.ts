import * as React from "react";

declare namespace PayjpCheckout {
  interface Props extends React.HTMLProps<PayjpCheckout> {
    dataKey: string,
    dataPayjp?: string,
    dataPartial?: string,
    dataText?: string,
    dataSubmitText?: string,
    dataTokenName?: string,
    dataPreviousToken?: string,
    dataLang?: string,
    dataNamePlaceholder?: string,
    className?: string,
    onCreatedHandler?: Function,
    onFailedHandler?: Function,
  }
}

declare class PayjpCheckout extends React.Component<PayjpCheckout.Props> { }

export default PayjpCheckout;
