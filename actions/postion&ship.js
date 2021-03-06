exports.getPositionId = (position) => {
  if (position == 1) return "Auditor";
  if (position == 2) return "Company Representative";
  if (position == 3) return "Master";
  if (position == 4) return "Chief Officer";
  if (position == 5) return "2nd Officer";
  if (position == 6) return "3rd Officer";
  if (position == 7) return "Deck Cadet";
  if (position == 8) return "Chief Engineer";
  if (position == 9) return "2nd Engineer";
  if (position == 10) return "3rd Engineer";
  if (position == 11) return "4th Engineer";
  if (position == 12) return "Engine Cadet";
  if (position == 13) return "ETO/Electrical Officer";
  if (position == 14) return "Bosun";
  if (position == 15) return "Able Bodied Seaman";
  if (position == 16) return "Ordinary Seaman";
  if (position == 17) return "Deck Boy";
  if (position == 18) return "Deck Fitter";
  if (position == 19) return "Engine Fitter";
  if (position == 20) return "Oiler/Motorman";
  if (position == 21) return "Wiper";
  if (position == 22) return "Engine Boy";
  if (position == 23) return "Chief Cook";
  if (position == 24) return "Messman";
  if (position == 25) return "Mess Boy";
  if (position == 26) return "Riding Gang";
  if (position == 27) return "Riding Fitter";
  if (position == 28) return "Guest";
};

exports.getShipId = (ship) => {
  if (ship == 1) return "Bulk Carrier";
  if (ship == 2) return "Oil Tanker";
  if (ship == 3) return "Chemical Tanker";
  if (ship == 4) return "LNG Tanker";
  if (ship == 5) return "LPG Tanker";
  if (ship == 6) return "Container Carrier";
  if (ship == 7) return "Car Carrier";
  if (ship == 8) return "General Cargo Ship";
  if (ship == 9) return "Passenger Ship";
};
