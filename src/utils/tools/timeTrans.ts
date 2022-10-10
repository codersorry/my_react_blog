export default function timeTrans(time: any, type?: number) {
  if (!time) {
    return false;
  }
  let date: any = new Date(new Date(time).getTime() + 8 * 3600 * 1000);
  date = date.toJSON();
  if (type === 1) {
    date = date.substring(0, 10);
  } else {
    date = date.substring(0, 19).replace("T", " ");
  }
  return date;
}
