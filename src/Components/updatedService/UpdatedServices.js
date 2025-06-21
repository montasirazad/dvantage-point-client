import { useState } from "react";
import updatedServices from "../../utils/updatedServices";
import "./UpdatedServices.css";
const UpdatedServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [imgNo, setImgNo] = useState(null);

  const modalImageSrc = () => {
    const imgToShow = updatedServices.find((img) => img.id === imgNo);
    const imgPath = imgToShow.imgSrc;
    return imgPath;
  };

  return (
    <>
      {showModal && (
        <div className="modal-container">
          <img src={modalImageSrc()} alt="" className="modalImg" />
          <button
            onClick={() => setShowModal(false)}
            className="btn btn-danger my-2"
          >
            Close
          </button>
        </div>
      )}
      <div className="updated-service-main">
        {updatedServices.map((service) => (
          <div key={service.id} className="updated-service-card">
            <img
              onClick={() => {
                setShowModal(true);
                setImgNo(service.id);
              }}
              src={service.imgSrc}
              title="Click to see fullscreen"
              alt="service.imgSrc"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default UpdatedServices;
