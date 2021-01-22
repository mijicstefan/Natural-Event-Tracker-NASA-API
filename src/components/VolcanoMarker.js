
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/mountain";

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="volcano-icon" />
    </div>
  );
};

export default LocationMarker;
