import { Product } from "model/product.model";

export const cmsProviders = [
    { provide: 'PRODUCT_REPOSITORY', useValue: Product },
]