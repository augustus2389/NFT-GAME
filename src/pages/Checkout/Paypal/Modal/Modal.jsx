import { useMemo, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.scss";
import userCheckOut from "../../../../asset/image/userCheckOut.svg";
import Card from "../../../../asset/image/card.svg";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import { addOrder, removeCart } from "../../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const CardVisit = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
`;
const OderrSummary = styled.div`
  background-color: #f2f2f2;
  border-radius: 4px;
  overflow-y: auto;
  height: 500px;
`;
const DropdownCardInfo = styled.ul`
  padding: 10px;
  transition: all 3s linear;
`;

const DropDownList = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
  }
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 16px;
  margin-bottom: 0.8em;
`;

const Text = styled.p`
  font-size: 12px;
  color: gray;
  padding-top: 20px;
`;
const ImageOder = styled.img`
  width: 110px;
  border-radius: 10px;
  aspect-ratio: 6/7;
`;
const Oder = styled.div`
  display: flex;
  padding: 0 20px;
  margin: 20px 0;
  align-items: center;
`;
const PriceOrder = styled.p`
  color: black;
  font-weight: 700;
`;
const InfoOrder = styled.div`
  padding: 0 10px;
`;
const Total = styled.div`
  display: flex;
  padding: 0 20px;

  color: black;
  justify-content: space-between;
`;
const TotalFont = styled.p`
  color: rgba(20, 20, 20, 0.72);
`;
const CreditCard = styled.div`
  display: flẽx;
  justify-content: space-between;
`;
const Credit = styled.div`
  background-color: rgba(20, 20, 20, 0.04);
  margin: 20px 0;
  padding: 20px;
`;

const ERROR_MESSAGES = {
  emptyCardNumber: "The card number is invalid",
  invalidCardNumber: "The card number is invalid",
  emptyExpiryDate: "The expiration date is invalid",
  monthOutOfRange: "The expiration month must be between 01 and 12",
  yearOutOfRange: "The year of expiration cannot be in the past",
  dateOutOfRange: "The expiration date cannot be in the past",
  invalidExpiryDate: "The expiration date is invalid",
  emptyCVC: "The security code is invalid",
  invalidCVC: "The security code is invalid",
};

function MyVerticallyCenteredModal(props) {
  const [cardNumber, setCardNumber] = useState();
  const [expiryDate, setExpiry] = useState();
  const [cvc, setCVC] = useState();
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { account } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const isDisable = true;
  const toggling = () => {
    setIsOpen(!isOpen);
  };

  const { carts } = useSelector((state) => state.cart);
  const subTotal = useMemo(() => {
    return carts.reduce((total, product) => {
      if (isNaN(product.price)) {
        return total;
      }
      return total + product.price;
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carts]);

  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs({
    errorMessages: ERROR_MESSAGES,
  });

  const handleSubmit = () => {
    if (account.id) {
      const newOrder = {
        id: account.id + 1,
        userId: account.id,
        items: carts,
        createAt: Date(),
        payMethod: "Card Credit",
        price: subTotal + 13,
      };
      dispatch(addOrder(newOrder));
      navigate("/");
      carts.forEach((cart) => dispatch(removeCart(cart.id)));
    }
    if (wrapperProps.error) {
      setIsOpen(!isOpen);
    } else {
      setChecked(isDisable);
    }
  };
  const handleChange = (e) => {
    const target = e.target;
    if (target.name === "cardNumber") {
      setCardNumber(target.value);
    } else if (target.name === "expiryDate") {
      setExpiry(target.value);
    } else if (target.name === "cvc") {
      setCVC(target.value);
    }
  };
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <img id="usercheckout" src={userCheckOut} alt="" />
          <p>{account.LastName}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-8">
            <CardVisit>
              <div className="cardvisit" onClick={toggling}>
                <input type="radio" />
                <img id="card" src={Card} alt="" />
                <p className="text-black">Credit Card</p>
              </div>
              {isOpen && (
                <DropdownCardInfo>
                  <DropDownList>
                    <ListItem>
                      <div className="mutilple-card">
                        <p>CARD DETAIL</p>
                        <div>
                          <img
                            src="data:image/png;base64,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"
                            alt=""
                          />
                          <img
                            src="https://securecdn.pymnts.com/wp-content/uploads/2014/03/Discover-logo-e1416429693676.jpg"
                            alt=""
                          />
                          <img
                            src="https://www.taichinhz.com/wp-content/uploads/2021/09/the-jcb-la-the-gi3.png"
                            alt=""
                          />
                          <img
                            src="https://taichinh.online/wp-content/uploads/2017/02/the-mastercard.png"
                            alt=""
                          />
                          <img
                            src="https://luatvietan.vn/wp-content/uploads/2014/07/dich-vu-visa.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <PaymentInputsWrapper {...wrapperProps}>
                          <svg {...getCardImageProps({ images })} />
                          <input
                            {...getCardNumberProps({ onChange: handleChange })}
                          />
                          <input
                            {...getExpiryDateProps({ onChange: handleChange })}
                          />
                          <input {...getCVCProps({ onChange: handleChange })} />
                        </PaymentInputsWrapper>
                      </div>
                      <Text>
                        By choosing to save your payment information, this
                        payment method will be selected as the default for all
                        purchases made using Augustus Games payment, including
                        purchases in Fortnite, Rocket League, Fall Guys and the
                        Augsutus Games Store. You can delete your saved payment
                        information anytime on this payment screen or by logging
                        in to your Epic Games account, and selecting payment
                        management in your account settings.
                      </Text>
                    </ListItem>
                  </DropDownList>
                </DropdownCardInfo>
              )}
            </CardVisit>
          </div>
          <div className="col-lg-4">
            <OderrSummary>
              <span>ODER SUMMARY</span>
              {carts.map((cart) => (
                <Oder key={cart.id}>
                  <ImageOder src={cart.avatar} alt={cart.title} />
                  <InfoOrder>
                    <p className="text-black">{cart.title}</p>
                    <PriceOrder>{cart.price} $</PriceOrder>
                  </InfoOrder>
                </Oder>
              ))}
              <Total>
                <TotalFont>Price</TotalFont>
                <TotalFont>{subTotal} $</TotalFont>
              </Total>
              <hr
                style={{ color: "black", width: "90%", margin: "10px auto" }}
              />

              <Total>
                <TotalFont className="fw-bold">Total</TotalFont>
                <TotalFont className="fw-bold">{subTotal} $</TotalFont>
              </Total>
              <Credit>
                <TotalFont className="fw-bold">Payment Details</TotalFont>
                <CreditCard>
                  <TotalFont>Credit Card</TotalFont>
                  <TotalFont>13 $</TotalFont>
                </CreditCard>
              </Credit>
              <button className="button-22" onClick={handleSubmit}>
                make payment
              </button>
            </OderrSummary>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function ModalComponent({ cart }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      {cart.length === 0 ? (
        <Button variant="primary" disabled onClick={() => setModalShow(true)}>
          Check Out
        </Button>
      ) : (
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Check Out
        </Button>
      )}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalComponent;
