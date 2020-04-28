export const emailValidation: (email: string) => boolean = (email: string) => {
  if (email.length < 10) {
    return false;
  }

  return email.includes('@');
}

export const passwordLength: (pass: string) => boolean = (pass: string) => {
  return pass.length >= 6
}