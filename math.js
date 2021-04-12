export const PI = 3.14;

export function pow (base, exponent = 2){
 
  if (exponent === 0){
    return 1;
  }
  return base * pow(base, exponent-1);
}

export function hypotenuse (adjacent, opposite){

  return {
          adjacent,
          opposite,
          hypotenuse: Math.sqrt(adjacent**2 + opposite**2)
         };
}

export function circleArea (radius){
  return PI * radius**2;
}
