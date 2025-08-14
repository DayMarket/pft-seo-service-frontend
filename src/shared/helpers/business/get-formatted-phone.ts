export function getFormattedPhone(unformattedPhone: string): string {
  const phoneWithoutPrefix = unformattedPhone.substr(unformattedPhone.length - 9, 9);

  return (
    '+998 ' +
    phoneWithoutPrefix.slice(0, 2) +
    ' ' +
    phoneWithoutPrefix.slice(2, 5) +
    '-' +
    phoneWithoutPrefix.slice(5, 7) +
    '-' +
    phoneWithoutPrefix.slice(7, 9)
  );
}
