import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function PreviewData({ modal, setModal, previewData }) {
  return (
    <>
      <Modal show={modal} size="5xl" onClose={() => setModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="flex">
            <div className="w-[25%] mr-3">
              <img
                src={previewData?.thumbnail}
                className="h-full rounded-md "
                alt=""
              />
            </div>
            <div className="w-[70%] text-start pl-3 border rounded-md border-gray-600">
              <h1 className="text-2xl">{previewData?.title}</h1>
              <p className="text-gray-400">{previewData?.description}</p>
              <p>{previewData?.prices}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
