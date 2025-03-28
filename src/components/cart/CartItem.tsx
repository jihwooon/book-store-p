import styled from "styled-components";
import { Cart } from "../../models/cart.model";
import Button from "../common/button";
import Title from "../common/title";
import { formatNumber } from "../../utils/format";
import CheckIconButton from "./CheckIconButton";
import { useMemo } from "react";
import { useAlert } from "../../hook/useAlert";

interface Props {
  cart: Cart;
  checkedItems: number[];
  onCheck : (id: number) => void;
  onDelete: (id: number) => void;
}

const CartItem = ({ cart, checkedItems, onCheck, onDelete }: Props) => {
  const { showConfirm } = useAlert();

  const isChecked = useMemo(() => {
    return checkedItems.includes(cart.id);
  }, [checkedItems, cart.id]);

  const handleCheck = () => {
    onCheck(cart.id);
  }

  const handleDelete = () => {
    showConfirm("정말 삭제하시겠습니까?", () => {
      onDelete(cart.id)
    })
  }

  return (
    <CartItemStyle>
      <div className="info">
        <div><CheckIconButton isChecked={isChecked} onCheck={handleCheck}/></div>
        <div>
          <Title size="medium">{cart.title}</Title>
          <p>{cart.summary}</p>
          <p>{formatNumber(cart.price)}</p>
          <p>{cart.quantity}</p>
        </div>
      </div>
      <Button size="medium" scheme="normal" onClick={handleDelete}>장바구니 삭제</Button>
    </CartItemStyle>
  );
}

const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 12px;

  p {
    padding: 0 0 8px 0;
    margin: 0;
  }
`;

export default CartItem;
