# AWS Marketplace — SaaS listing

**Status:** Ready as a runbook after production billing, support mailbox, and legal pages are live. This is not a JSON plugin.

**Fit:** Highest paid-intent overlap — buyers already on AWS/SES.

## Product framing for the listing

- **Title:** AllStackd — Amazon SES Control Plane  
- **Short:** Operations control plane for multi-project and multi-account SES.  
- **Long:** Use copy from `../listing.md`. Repeat: customers pay Amazon for delivery; AllStackd is the ops layer. Link CloudFormation / AWS connect docs.  
- **Categories:** Developer Tools / Business Applications (confirm in seller console)  
- **Pricing dimensions:** Portfolio (€9), Studio (€29 hero), Agency (€79) — map to Marketplace contract dimensions in the currency AWS requires at listing time.

## Seller registration

1. Open AWS Marketplace Management Portal: https://aws.amazon.com/marketplace/management/
2. Register as a seller (tax interview, bank account, public profile, support contact `support@allstackd.com`).
3. Complete identity / tax verification for your selling entity.
4. Wait for seller account approval before creating the product.

## Product type

Create a **SaaS** product (contract or subscriptions — pick **one** entitlement model with AWS docs; do not run a second unpaid Stripe checkout for the same seat without a clear “buy on AWS Marketplace vs buy on allstackd.com” story).

Recommended for v1:

- [ ] SaaS contract with monthly dimensions matching Portfolio / Studio / Agency
- [ ] Free trial dimension aligned with “trial starts at first active AWS connection” if Marketplace allows; otherwise document the difference on the product page

## Fulfillment

Marketplace will POST entitlement / subscription events. You must:

- [ ] Implement SaaS fulfillment endpoint (resolve AWS customer id → AllStackd organization)
- [ ] Enable the matching plan only after entitlement is confirmed
- [ ] Handle subscribe, upgrade, downgrade, unsubscribe, and failed payment
- [ ] Deep-link successful purchases to AllStackd onboarding (AWS connect)

Do not invent fulfillment code in this plugin package; implement inside the SaaS app when seller registration is approved.

## Listing checklist

- [ ] Product logo and screenshots (dashboard, AWS connect, portfolio health)
- [ ] Support and refund policy URLs
- [ ] Privacy / terms / EULA links
- [ ] “You pay Amazon for SES delivery” callout on the product page
- [ ] CloudFormation / connect documentation URL
- [ ] Request AWS listing review; respond to any findings
- [ ] After Go Live, add Marketplace badge/link on allstackd.com pricing

## Explicit non-goals for this pass

- No AMI / container product
- No Shopify coupling
- No second email-sending SKU
