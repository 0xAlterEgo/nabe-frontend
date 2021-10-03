export interface BigNumberToJson {
  type: "BigNumber";
  hex: string;
}

export type SerializedBigNumber = string;

export interface PotState {
  potData: {
    isLoading: boolean;
    season: SerializedBigNumber;
    participant: SerializedBigNumber;
    tvl: SerializedBigNumber;
    potEnd: boolean;
    nextDraw: Date;
  };
}

export interface ModalState {
  isAmountModal: boolean;
  isTxModal: boolean;
}
