import { Product } from "model/product.model";

export const productProviders = [
    { provide: 'PRODUCT_REPOSITORY', useValue: Product },
]