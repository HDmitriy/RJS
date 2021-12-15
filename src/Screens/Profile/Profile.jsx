import firebase from "firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';

import {
  changeUserNameAction,
  toggleUserNameAction,
  saveCheckboxStateAction,
} from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const { name, showName, viewCheckbox } = useSelector(profileSelector);
  
  const handleToggleCheckbox = () => {
    dispatch(saveCheckboxStateAction());
  };
  const handleInitFirebaseProfile = async () => {
    const id = firebase.auth().currentUser.uid;

    await firebase
      .database()
      .ref("profile")
      .child(id)
      .child("userName")
      .on("value", (snapshot) => {
        dispatch(changeUserNameAction({ name: snapshot.val() }));
      });
  };

  useEffect(() => {
    handleInitFirebaseProfile();
  }, []);

  const handleToggleShowName = () => {
    dispatch(toggleUserNameAction());
  };

  const handleNameChange = (e) => {
    const db = firebase.database();

    const id = firebase.auth().currentUser.uid;

    db.ref("profile").child(id).child("userName").set(e.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleNameChange} />
      <button onClick={handleToggleShowName}>Click me!</button>
      <Checkbox value={viewCheckbox} onClick={handleToggleCheckbox} defaultChecked />
      {showName && name}
    </>
  );
};