export default function json(data) {
  return new Promise((resolve, _reject) => {
    // эмуляция обработки ArrayBuffer
    setTimeout(() => {
      resolve(String.fromCharCode.apply(null, new Uint16Array(data)));
    }, 500);
  });
}
