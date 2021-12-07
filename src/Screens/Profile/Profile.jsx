import { useDispatch, useSelector } from "react-redux";
import { saveCheckboxStateAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";
import Checkbox from '@mui/material/Checkbox';

export const Profile = () => {
  const dispatch = useDispatch();
  const { viewCheckbox } = useSelector(profileSelector);

  const handleToggleCheckbox = () => {
    dispatch(saveCheckboxStateAction());
  };

  return (
    <>
      <Checkbox onClick={handleToggleCheckbox} />
      {viewCheckbox}
    </>
  );
};