import { useAppDispatch, useAppSelector } from "src/app/hooks";
import BeansControl from "./BeansControl";
import { selectBeansAmount, selectBeansStatus } from "../selectors";
import { Status } from "src/types";
import { update } from "..";

const Beans: React.FC = () => {
  const dispatch = useAppDispatch();
  const beansAmount: number = useAppSelector(selectBeansAmount);
  const beansStatus: Status = useAppSelector(selectBeansStatus);
  const updateBeansAmount = (value: number) => {
    dispatch(update(value));
  };
  return (
    <BeansControl
      amount={beansAmount}
      status={beansStatus}
      update={updateBeansAmount}
    />
  );
};

export default Beans;
