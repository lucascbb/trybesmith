export const validateUsername = (amount:string) => {
  if (!amount) return { status: 400, message: '"amount" is required' };
  if (typeof amount !== 'string') return { status: 422, message: '"amount" must be a string' };
  if (amount.length < 3) { 
    return { 
      status: 422, 
      message: '"amount" length must be at least 3 characters long' }; 
  }
};

const validate = { validateUsername };

export default validate;