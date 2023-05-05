"use client";

interface Items {
  id: string;
  name: string;
  number: number;
  type: string;
}

interface Props {
  number: number;
  name: string;
  id: string;
  removeItemFromCart: (id: string) => void;
  setCartItems: (event: any) => void;
  cartItems: Items[];
}

const DroppableItem: React.FC<Props> = (props) => {
  const { number, name, id, removeItemFromCart, setCartItems, cartItems } =
    props;

  const changeItemNB = (event: any) => {};

  return (
    <div className="flex justify-between items-center w-5/6 py-3">
      <div className="h-7 w-7 rounded-full border-2 border-textPrimary" />
      <div className="flex justify-between items-center border-2 border-grisPrimary rounded-[45px] py-5 px-5 w-5/6">
        <div className="border-2 border-primary rounded-[11px] px-3 py-1">
          X
          <input
            className="bg-tertiary w-5"
            value={number}
            type="text"
            onChange={changeItemNB}
          />
        </div>
        <p className="text-textPrimary text-l">{name}</p>

        <div className="w-8 h-8 shadow rounded-[10px] flex justify-center items-center mx-2 cursor-pointer ">
          <img
            alt=""
            src="/icons/trashcanicon.svg"
            onClick={() => removeItemFromCart(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default DroppableItem;
