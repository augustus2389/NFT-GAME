// import React, { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import {
//   ToggleBtn,
//   ModalBox,
//   ModalContent,
//   ModalContainer,
// } from "./Modal/Modal";

// // Modal component with 'showModal' prop only
// // to manage its state of visibility and
// // animated using framer-motion
// const Modal = ({ showModal }) => {
//   return (
//     <ModalContainer>
//       <AnimatePresence>
//         {showModal && (
//           <ModalBox
//             initial={{ opacity: 0, y: 60, scale: 0.5 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               scale: 1,
//               // making use of framer-motion spring animation
//               // with stiffness = 300
//               transition: { type: "spring", stiffness: 300 },
//             }}
//             exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
//           >
//             <ModalContent
//               initial={{ y: -30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
//             >
//               {/* Modal content is geeksforgeeks image */}
//               <img src="Modal image link" alt="geeksforgeeks" />
//             </ModalContent>
//           </ModalBox>
//         )}
//       </AnimatePresence>
//     </ModalContainer>
//   );
// };

// const Paypal = () => {
//   // React useState hook to manage the state of 'showModal'
//   // i.e. responsible to toggle the modal container
//   const [showModal, setShowModal] = useState(false);

//   // utility function to set the showModal value
//   // opposite of its last value
//   // to toggle modal
//   const displayModal = () => {
//     setShowModal(!showModal);
//     document.getElementById("btn").style.visibility = "hidden";
//   };

//   // event listener for document body
//   // so that on clicking outside the modal,
//   // 'showModal' is set to false.
//   document.body.addEventListener("click", () => {
//     if (showModal) {
//       setShowModal(false);
//     }
//   });

//   return (
//     <ModalContainer>
//       <ToggleBtn
//         id="btn"
//         initial={{ x: -700 }}
//         animate={{
//           x: 0,
//           transition: { duration: 0.1 },
//         }}
//         // event listener for the toggle button
//         // to display modal on click
//         onClick={displayModal}
//       >
//         Toggle Modal
//       </ToggleBtn>
//       {/* passing 'showModal' as a prop to Modal component */}
//       <Modal showModal={showModal} />
//     </ModalContainer>
//   );
// };

// export default Paypal;
