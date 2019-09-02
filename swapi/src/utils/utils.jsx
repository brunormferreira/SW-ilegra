export function asyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 3000));
}

