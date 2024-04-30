import React from "react";
import { useAppDispatch } from "../../lib/hook";
import { switchButton } from "../../lib/features/test/buttonSlice";

type Props = {
  text: string;
};

const Button = (props: Props) => {
  const dispatch = useAppDispatch();

  // ボタンのテキストをReduxで切り替え
  const handleClick = () => {
    dispatch(switchButton());
  };

  return (
    <>
      <div className="w-[150px] mx-auto mt-12 p-1 text-white w-[150px] rounded-[65px] bg-gradient-to-r from-[#4568dc] to-[#e9f38b] hover:bg-gradient-to-l from-[#4568dc] to-[#e9f38b]">
        <button
          onClick={() => handleClick()}
          className="bg-black w-full px-5 py-2 rounded-[65px]"
        >
          {props.text}
        </button>
      </div>
    </>
  );
};

export default Button;
