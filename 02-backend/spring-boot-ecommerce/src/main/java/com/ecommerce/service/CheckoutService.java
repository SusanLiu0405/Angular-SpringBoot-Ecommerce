package com.ecommerce.service;

import com.ecommerce.dto.PurchaseResponse;
import com.ecommerce.dto.Purchase;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
