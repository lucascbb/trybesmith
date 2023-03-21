export const validate2 = (amount:string) => {
  if (!amount) return { status: 400, message: '"amount" is required' };
  if (typeof amount !== 'string') return { status: 422, message: '"amount" must be a string' };
  if (amount.length < 3) { 
    return { 
      status: 422, 
      message: '"amount" length must be at least 3 characters long' }; 
  }
};

const validateamount = { validate2 };

export default validateamount;