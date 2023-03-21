export const validateLevel = (level:string) => {
  if (!level) return { status: 400, message: '"level" is required' };
  if (typeof level !== 'string') return { status: 422, message: '"level" must be a string' };
  if (level.length < 3) { 
    return { 
      status: 422, 
      message: '"level" length must be at least 3 characters long' }; 
  }
};

const validate = { validateLevel };

export default validate;