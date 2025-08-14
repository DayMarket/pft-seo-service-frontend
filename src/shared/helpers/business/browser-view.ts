export function trackMobileSafari(route: any) {
  return (
    Boolean(route.query.compactMode) || /((iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))| wv/i.test(navigator.userAgent)
  );
}
