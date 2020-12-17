import { useState } from "react";

const useDate = (value) => {
  const [date] = useState(new Date(value));

  return date.toLocaleDateString();
};

export default useDate;
