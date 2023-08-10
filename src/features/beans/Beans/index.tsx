import { useAppDispatch, useAppSelector } from "src/app/hooks";
import BeansControl from "./BeansControl";
import { selectBeansAmount, selectBeansStatus } from "../selectors";
import { Status } from "src/types";
import { useEffect } from "react";
import { fetchBeans, updateAmount } from "..";

const Beans: React.FC = () => {
  const dispatch = useAppDispatch();
  const beansAmount: number = useAppSelector(selectBeansAmount);
  const beansStatus: Status = useAppSelector(selectBeansStatus);
  const updateBeansAmount = (value: number) => {
    dispatch(updateAmount(value));
  };

  useEffect(() => {
    dispatch(fetchBeans());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BeansControl
      amount={beansAmount}
      status={beansStatus}
      updateAmount={updateBeansAmount}
    />
  );
};

export default Beans;
