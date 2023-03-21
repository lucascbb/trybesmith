export const validateVocation = (vocation:string) => {
  if (!vocation) return { status: 400, message: '"vocation" is required' };
  if (typeof vocation !== 'string') return { status: 422, message: '"vocation" must be a string' };
  if (vocation.length < 3) { 
    return { 
      status: 422, 
      message: '"vocation" length must be at least 3 characters long' }; 
  }
};

const validate = { validateVocation };

export default validate;