import { type Locator } from '@playwright/test';
export interface ThnmxProductPageModel {
    productName: Locator;
    productSummary: Locator;
    productPrice: Locator;
    productImage: Locator;
    productDetails: Locator;
    productAddToCartButton: Locator;
    productAddToWishlistButton: Locator;
    productAddToCompareButton: Locator;
    productShare: Locator;
    productPrint: Locator;
    productCompare: Locator;
}

