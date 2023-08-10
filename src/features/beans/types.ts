import { Status } from "src/types";

export interface Beans {
  amount: number;
  id?: string;
  label?: string;
  updatedDate?: string;
  updatedBy?: string;
}

export interface BeansState extends Beans {
  status: Status;
}

export interface BeansControlProps extends BeansState {
  updateAmount: (value: number) => void;
}
