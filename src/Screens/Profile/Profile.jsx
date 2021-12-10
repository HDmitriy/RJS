import { useDispatch, useSelector } from "react-redux";
import { saveCheckboxStateAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";
import Checkbox from '@mui/material/Checkbox';
import { addMessageWithThunk } from "../../Store/Messages/actions";

export const Profile = () => {
  const dispatch = useDispatch();
  const { viewCheckbox } = useSelector(profileSelector);

  const handleToggleCheckbox = () => {
    dispatch(saveCheckboxStateAction());
    dispatch(
      addMessageWithThunk({
        chatId: "id1",
        message: "some text",
        author: "Shrek",
      })
    );
  };
 

  return (
    <>
      <Checkbox value={viewCheckbox} onClick={handleToggleCheckbox} defaultChecked />
      
    </>
  );
};