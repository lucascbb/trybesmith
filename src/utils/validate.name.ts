export const validate = (name:string) => {
  if (!name) return { status: 400, message: '"name" is required' };
  if (typeof name !== 'string') return { status: 422, message: '"name" must be a string' };
  if (name.length < 3) { 
    return { 
      status: 422, 
      message: '"name" length must be at least 3 characters long' }; 
  }
};

const validateName = { validate };

export default validateName;