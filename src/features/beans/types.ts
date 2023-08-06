import { Status } from "src/types";

export interface BeansResponse {
  amount: number;
}

export interface BeansState {
  amount: number;
  status: Status;
}

export interface BeansControlProps extends BeansState {
  update: (value: number) => void;
}
