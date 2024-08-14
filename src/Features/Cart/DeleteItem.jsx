import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
