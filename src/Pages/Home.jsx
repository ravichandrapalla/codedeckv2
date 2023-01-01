import React, { useContext } from "react";
import LeftPaneHomeScreen from "../Components/Home/LeftPaneHomeScreen";
import RightPaneHomeScreen from "../Components/Home/RightPaneHomeScreen";
import Modal from "../Components/Modal";
import { ModalContext } from "../Context/ModalContext";

function Home() {
  const { isOpenModal } = useContext(ModalContext);

  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
        <div className="md:w-full sm:w-full w-5/12">
          <LeftPaneHomeScreen />
        </div>
        <div className="md:w-full sm:w-full w-7/12">
          <RightPaneHomeScreen />
        </div>
        {isOpenModal.show && <Modal />}
      </div>
    </>
  );
}

export default Home;
