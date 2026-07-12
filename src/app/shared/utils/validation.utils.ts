export const isNotEmpty = (value: string): boolean => value.trim() !== "";

export const isEmailValid = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
