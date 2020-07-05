export default function getCurrentMonth() {
  const date = new Date();
  return date.getMonth() + 1;
}
