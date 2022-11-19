import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const OrderList = styled.ol`
  padding: 0;
`;

function OrderHistory() {
  const { orders } = useSelector((state) => state.cart);
  const { account } = useSelector((state) => state.auth);
  const userOrder = orders.filter((order) => order.userId === account.id);
  console.log(userOrder);
  return (
    <section id="history" className="py-5">
      <div className="container">
        <h1 className="fs-4 mb-5">Lịch sử đơn hàng</h1>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>List Game</th>
              <th>Realtime Purchase</th>
              <th>Payment</th>
              <th>Total Order</th>
            </tr>
          </thead>
          <tbody>
            {userOrder.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>
                  <OrderList>
                    {order.items.map((item) => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </OrderList>
                </td>
                <td>{order.createAt}</td>
                <td>
                  {order.paymentMethod === "transfer"
                    ? "Paypal"
                    : "Card Credits"}
                </td>
                <td>{order.price}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default OrderHistory;
