export const validatePassword = (password:string) => {
  if (!password) return { status: 400, message: '"password" is required' };
  if (typeof password !== 'string') return { status: 422, message: '"password" must be a string' };
  if (password.length < 8) { 
    return { 
      status: 422, 
      message: '"password" length must be at least 8 characters long' }; 
  }
};

const validate = { validatePassword };

export default validate;