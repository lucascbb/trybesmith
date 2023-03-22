export const validateproduct = (product:string) => {
  if (!product) return { status: 400, message: '"product" is required' };
  if (!Array.isArray(product)) return { status: 422, message: '"productIds" must be an array' };
  if (product.length < 1) { 
    return { 
      status: 422, 
      message: '"productIds" must include only numbers' }; 
  }
};

const validate = { validateproduct };

export default validate;