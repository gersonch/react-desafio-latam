export function formatPrice(price) {
    return new Intl.NumberFormat("es-CL").format(price);
  }