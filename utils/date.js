export default function getCurrentMonth() {
  let month = new Array();
  month[0] = "jan";
  month[1] = "feb";
  month[2] = "mar";
  month[3] = "apr";
  month[4] = "may";
  month[5] = "jun";
  month[6] = "jul";
  month[7] = "aug";
  month[8] = "sep";
  month[9] = "oct";
  month[10] = "nov";
  month[11] = "dec";
  const date = new Date();

  return month[date.getMonth()];
}
