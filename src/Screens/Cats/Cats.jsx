import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCatActionWithThunk } from "../../Store/Cats/actions";
import { catSelector } from "../../Store/Cats/selectors";

export const Cats = () => {
  const { loading, error, catUrl } = useSelector(catSelector);
  const dispatch = useDispatch();

  const handleGetCats = () => {
    dispatch(getCatActionWithThunk());
  };

  useEffect(() => {
    handleGetCats();
  }, [dispatch]);

  if (loading) return <CircularProgress />;

  if (error) {
    return (
      <div>
        <div>error</div>
        <button onClick={handleGetCats}>Refresh page</button>
      </div>
    );
  }

  return (
    <div>
      <img src={catUrl} alt="" />
    </div>
  );
};