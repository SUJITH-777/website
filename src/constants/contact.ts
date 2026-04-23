/** Postal address shown in Contact and Footer. */
export const ORGANIZATION_ADDRESS =
  "Address: No. 69, 1st Floor, Pt Plaza, Cholanagar, R T Nagar Malleswaram, Bangalore North Bengaluru, Karnataka, 560032 India";

const mapsSearchQuery = ORGANIZATION_ADDRESS.replace(/^Address:\s*/i, "").trim();

/** Opens Google Maps search for this location (new tab). */
export const ORGANIZATION_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  mapsSearchQuery
)}`;
