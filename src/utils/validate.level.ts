export const validateLevel = (level:number) => {
  if (!level) return { status: 400, message: '"level" is required' };
  if (typeof level !== 'number') return { status: 422, message: '"level" must be a string' };
  if (level < 1) { 
    return { 
      status: 422, 
      message: '"level" must be greater than or equal to 1' }; 
  }
};

const validate = { validateLevel };

export default validate;