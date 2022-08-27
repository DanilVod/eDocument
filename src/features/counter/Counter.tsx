import tw from "twin.macro";
import { Button } from "@/components/Button/Button";
import { Typography } from "@/components/Typography/Typography";

import { useAppSelector, useAppDispatch } from "@/hooks/redux";

import { increment } from "./counterSlice";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>{count}</h1>
      <Button
        type="empty"
        color="accentBlue"
        onclick={() => dispatch(increment())}
      >
        <div css={tw`px-5`}>
          <Typography weight="medium">Secondary button</Typography>
        </div>
      </Button>
    </>
  );
}
