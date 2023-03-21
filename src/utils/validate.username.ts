export const validateUsername = (username:string) => {
  if (!username) return { status: 400, message: '"username" is required' };
  if (typeof username !== 'string') return { status: 422, message: '"username" must be a string' };
  if (username.length < 3) { 
    return { 
      status: 422, 
      message: '"username" length must be at least 3 characters long' }; 
  }
};

const validate = { validateUsername };

export default validate;