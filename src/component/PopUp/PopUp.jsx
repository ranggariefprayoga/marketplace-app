/* eslint-disable react/prop-types */
import Popup from "reactjs-popup";
import DetailProduct from "../../pages/DetailPage";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";

const styleForCloseButton = {
  cursor: "pointer",
};

export const PopUp = ({ product }) => (
  <Popup trigger={<button className="open-detail">Detail Product</button>} modal nested>
    {(close) => (
      <div className="modal">
        <div className="close-detail" onClick={close}>
          <HighlightOffTwoToneIcon style={styleForCloseButton} />
        </div>
        <DetailProduct id={product.id} />
      </div>
    )}
  </Popup>
);
