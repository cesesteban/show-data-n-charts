import moment from "moment";

export const setEndTime = (value) => {
  return (
    value.coin.split("_")[1] &&
    moment(
      "20" +
        value.coin.split("_")[1].slice(0, 2) +
        "-" +
        value.coin.split("_")[1].slice(2, 4) +
        "-" +
        value.coin.split("_")[1].slice(4, 6)
    )
  );
};
