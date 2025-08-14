export async function isGeoGranted() {
  try {
    const res = await navigator.permissions.query({ name: 'geolocation' });

    if (res.state === 'granted') {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
}

export function getPositionCoords() {
  return new Promise<number[]>((resolve) => {
    isGeoGranted().then((isGranted) => {
      if (!isGranted) {
        return resolve([]);
      }

      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve([coords.latitude, coords.longitude]);
        },
        () => resolve([]),
      );
    });
  });
}
