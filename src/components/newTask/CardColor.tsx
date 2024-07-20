import React from "react";
import { cardColors } from "../../helpers/constants";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setNewTask } from "../../features/newTaskSlice";

const CardColor = () => {
  const newTask = useSelector((state: RootState) => state.newTask);
  const dispatch = useDispatch();

  const handleCardColorClick = (color: string) => {
    dispatch(setNewTask({ ...newTask, cardColor: color }));
  };

  return (
    <div className="mx-2 md:mx-0">
      <h3 className="font-bold text-habit-gray dark:text-habit-white mb-3 text-[12px] md:text-[16px]">
        Card Color
      </h3>
      <div className="flex flex-wrap gap-2 md:gap-4">
        {cardColors.map((color: string) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full text-xs md:text-[16px] cursor-pointer border-[1px] md:border-[3px] font-bold ${
              newTask.cardColor === color
                ? "border-black/60 dark:border-[#EDEAEA]"
                : "border-[#EDEAEA] dark:border-none"
            }`}
            onClick={() => handleCardColorClick(color)}
          >
            {newTask.cardColor === color && "X"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CardColor;