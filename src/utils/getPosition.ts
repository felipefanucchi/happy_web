export interface Position {
  latitude: number,
  longitude: number
}

export async function getPosition(): Promise<Position> {
  if (!navigator.geolocation) {
    alert(
      "your browser does not support geolocation, please, use Chrome or some modern browser."
    );
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      },
      error => {
        reject("Erro = " + error.code + " - " + error.message);
      }
    );
  });
}