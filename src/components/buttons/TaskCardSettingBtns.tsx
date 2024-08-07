import React from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useTaskCalls from "../../hooks/useTaskCalls";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";

const TaskCardSettingBtns = ({ taskId }: { taskId: string }) => {
  const { deleteTaskData } = useTaskCalls();
  const { date } = useSelector((state: RootState) => state.date);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteTaskData("tasks", taskId);
  };

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    navigate(`/home/${taskId}`, {
      state: { backgroundLocation: location, selectedDate: date },
    });
  };

  return (
    <div>
      <button onClick={handleEditClick}>
        <MdEdit className="w-4 h-4 md:w-5 md:h-5 pt-1 text-black/70 hover:text-orange-600" />
      </button>
      <button onClick={handleDeleteClick}>
        <RiDeleteBin6Fill className="w-4 h-4 md:w-5 md:h-5 pt-1 text-black/70 hover:text-red-600" />
      </button>
    </div>
  );
};

export default TaskCardSettingBtns;
