export const validateproduct = (product:string) => {
  if (!product) return { status: 400, message: '"productsIds" is required' };
  if (!Array.isArray(product)) return { status: 422, message: '"productsIds" must be an array' };
  if (product.length < 1) { 
    return { 
      status: 422, 
      message: '"productsIds" must include only numbers' }; 
  }
};

const validate = { validateproduct };

export default validate;