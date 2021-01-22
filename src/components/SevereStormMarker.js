import { Icon } from "@iconify/react";
import hurricaneIcon from "@iconify/icons-mdi/storm-advisory";

const SevereStormMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={hurricaneIcon} className="storm-icon" />
    </div>
  );
};

export default SevereStormMarker;
