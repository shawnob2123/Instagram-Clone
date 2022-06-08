const sizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
};

const weight: { [key: string]: TextStyle['fontWeight']} = {
  "full": 900,
  "semi": 600,
  "bold": 'bold',
  "normal": 'normal',
  "thin": 400
  
}
export default {sizes, weight};