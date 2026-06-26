import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'
import { useCart } from '../hooks/useCart'

const indonesiaProvinces = [
  'Aceh',
  'Bali',
  'Banten',
  'Bangka Belitung Islands',
  'Bengkulu',
  'Central Java',
  'Central Kalimantan',
  'Central Papua',
  'Central Sulawesi',
  'East Java',
  'East Kalimantan',
  'East Nusa Tenggara',
  'Gorontalo',
  'Jakarta',
  'Jambi',
  'Lampung',
  'Maluku',
  'North Kalimantan',
  'North Maluku',
  'North Sulawesi',
  'North Sumatra',
  'Papua',
  'Riau',
  'Riau Islands',
  'South Kalimantan',
  'South Sulawesi',
  'South Sumatra',
  'South Papua',
  'Southwest Papua',
  'Southeast Sulawesi',
  'Special Region of Yogyakarta',
  'West Java',
  'West Kalimantan',
  'West Nusa Tenggara',
  'West Papua',
  'West Sulawesi',
  'West Sumatra',
  'Highland Papua',
]

const deliveryOptions = [
  {
    id: 'standard',
    name: 'Standard Earth-Friendly',
    description: '3-5 business days',
    fee: 0,
  },
  {
    id: 'express',
    name: 'Vibe-Fast Shipping',
    description: 'Next business day',
    fee: 12000,
  },
]

function CheckoutItem({ item }) {
  const { product, size, quantity } = item

  return (
    <div className="flex gap-stack-md">
      <div className="w-16 h-20 bg-surface-container rounded border border-on-background overflow-hidden shrink-0">
        <img
          alt={product.name}
          className="w-full h-full object-cover"
          src={product.image}
        />
      </div>
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <p className="font-label-bold text-body-md leading-tight line-clamp-1">
            {product.name}
          </p>
          <p className="text-sm text-on-surface-variant">
            Size: {size} • Qty: {quantity}
          </p>
        </div>
        <p className="font-bold text-primary">{formatPrice(product.price * quantity)}</p>
      </div>
    </div>
  )
}

function DeliveryCard({
  option,
  checked,
  onChange,
}) {
  return (
    <label
      className={`relative flex items-center p-stack-lg border-2 rounded-lg cursor-pointer hover:bg-surface-container transition-colors group overflow-hidden ${
        checked ? 'border-primary' : 'border-on-background'
      }`}
    >
      <input
        checked={checked}
        className="hidden peer"
        name="delivery"
        onChange={() => onChange(option.id)}
        type="radio"
        value={option.id}
      />
      <div
        className={`absolute inset-0 -z-10 transition-colors ${
          checked ? 'bg-sun-yellow/70' : 'bg-transparent'
        }`}
      />
      <div className="flex items-center gap-stack-md w-full">
        <div className="w-6 h-6 border-2 border-on-background rounded-full flex items-center justify-center bg-surface">
          <div
            className={`w-3 h-3 bg-eco-maroon rounded-full ${
              checked ? 'block' : 'hidden'
            }`}
          />
        </div>
        <div className="flex-grow">
          <p className="font-label-bold text-body-md">{option.name}</p>
          <p className="text-on-surface-variant text-sm">{option.description}</p>
        </div>
        <span className="font-bold text-primary">
          {option.fee === 0 ? 'Free' : formatPrice(option.fee)}
        </span>
      </div>
    </label>
  )
}

function CheckoutEmptyState() {
  return (
    <main className="max-w-7xl mx-auto px-container-margin py-section-gap min-h-[819px]">
      <section className="flex flex-col items-center justify-center py-20 text-center space-y-8">
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 bg-sun-yellow rounded-full scale-75 blur-2xl opacity-30 animate-pulse" />
          <span
            className="material-symbols-outlined text-[120px] text-on-surface-variant"
            style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}
          >
            shopping_bag
          </span>
        </div>
        <div className="max-w-md">
          <h2 className="font-headline-xl text-headline-xl text-primary">
            Your cart is empty.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
            Add a few pre-loved gems first, then we&apos;ll get you to checkout.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/products"
            className="bg-primary text-white px-10 py-4 rounded-full font-headline-lg border-2 border-on-background hard-shadow hard-shadow-hover transition-all"
          >
            Start Shopping
          </Link>
          <Link
            to="/cart"
            className="bg-surface text-on-surface px-10 py-4 rounded-full font-headline-lg border-2 border-on-background hard-shadow hard-shadow-hover transition-all"
          >
            Go to Cart
          </Link>
        </div>
      </section>
    </main>
  )
}

export default function CheckoutPage() {
  const { cartItems, itemCount, subtotal, waterSaved } = useCart()
  const [shippingForm, setShippingForm] = useState({
    fullName: '',
    phoneNumber: '',
    shippingAddress: '',
    city: '',
    province: '',
    zipCode: '',
  })
  const [formErrors, setFormErrors] = useState({})
  const [touchedFields, setTouchedFields] = useState({})
  const [selectedDelivery, setSelectedDelivery] = useState('standard')
  const [promoCode, setPromoCode] = useState('')

  if (cartItems.length === 0) {
    return <CheckoutEmptyState />
  }

  const activeDelivery =
    deliveryOptions.find((option) => option.id === selectedDelivery) ??
    deliveryOptions[0]
  const total = subtotal + activeDelivery.fee
  const inputBaseClass =
    'vibe-input p-stack-md border-2 rounded-lg bg-surface transition-all'

  function validateField(name, value, values = shippingForm) {
    const trimmedValue = value.trim()

    switch (name) {
      case 'fullName':
        if (!trimmedValue) return 'Full name is required.'
        if (trimmedValue.length < 3) return 'Full name must be at least 3 characters.'
        return ''
      case 'phoneNumber': {
        if (!trimmedValue) return 'Phone number is required.'
        const normalizedPhone = trimmedValue.replace(/\D/g, '')
        if (normalizedPhone.length < 10 || normalizedPhone.length > 15) {
          return 'Use a valid Indonesian phone number.'
        }
        return ''
      }
      case 'shippingAddress':
        if (!trimmedValue) return 'Shipping address is required.'
        if (trimmedValue.length < 10) return 'Address must be at least 10 characters.'
        return ''
      case 'city':
        if (!trimmedValue) return 'City is required.'
        return ''
      case 'province':
        if (!trimmedValue) return 'Province is required.'
        return ''
      case 'zipCode':
        if (!trimmedValue) return 'Postal code is required.'
        if (!/^\d{5}$/.test(trimmedValue)) {
          return 'Postal code must be 5 digits.'
        }
        return ''
      default:
        return ''
    }
  }

  function validateForm(values) {
    return Object.fromEntries(
      Object.keys(values).map((key) => [key, validateField(key, values[key], values)]),
    )
  }

  function handleFieldChange(event) {
    const { name, value } = event.target

    setShippingForm((current) => {
      const nextValues = { ...current, [name]: value }

      if (touchedFields[name]) {
        setFormErrors((currentErrors) => ({
          ...currentErrors,
          [name]: validateField(name, value, nextValues),
        }))
      }

      return nextValues
    })
  }

  function handleFieldBlur(event) {
    const { name, value } = event.target

    setTouchedFields((current) => ({ ...current, [name]: true }))
    setFormErrors((current) => ({
      ...current,
      [name]: validateField(name, value),
    }))
  }

  function handleCheckoutSubmit(event) {
    event.preventDefault()

    const nextErrors = validateForm(shippingForm)
    setFormErrors(nextErrors)
    setTouchedFields({
      fullName: true,
      phoneNumber: true,
      shippingAddress: true,
      city: true,
      province: true,
      zipCode: true,
    })

    const hasErrors = Object.values(nextErrors).some(Boolean)
    if (hasErrors) {
      return
    }
  }

  function getFieldStateClass(fieldName) {
    return formErrors[fieldName]
      ? 'border-error focus:border-error'
      : 'border-on-background'
  }

  return (
    <main className="max-w-7xl mx-auto px-container-margin py-section-gap">
      <div className="mb-section-gap space-y-stack-sm">
        <p className="font-label-bold text-primary uppercase tracking-[0.25em]">
          Step 2 of 3
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <div className="h-2 w-20 rounded-full bg-primary" />
          <div className="h-2 w-20 rounded-full bg-sun-yellow" />
          <div className="h-2 w-20 rounded-full bg-surface-container-high" />
        </div>
        <h1 className="font-headline-xl text-headline-xl text-primary leading-tight">
          Where&apos;s this vibe headed?
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Lock in your shipping details, choose how fast you want it, and review your haul.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <section className="lg:col-span-8 space-y-stack-lg">
          <div className="bg-surface-container-lowest p-stack-lg border-2 border-on-background block-shadow rounded-lg">
            <h2 className="font-headline-lg text-headline-lg mb-stack-md">
              Shipping details
            </h2>
            <form className="space-y-stack-md" noValidate onSubmit={handleCheckoutSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div className="flex flex-col gap-base">
                  <label
                    className="font-label-bold text-on-surface-variant uppercase text-xs tracking-widest"
                    htmlFor="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    className={`${inputBaseClass} ${getFieldStateClass('fullName')}`}
                    placeholder="Alex Rivera"
                    name="fullName"
                    value={shippingForm.fullName}
                    onBlur={handleFieldBlur}
                    onChange={handleFieldChange}
                    type="text"
                    aria-invalid={Boolean(formErrors.fullName)}
                    aria-describedby={
                      formErrors.fullName ? 'full-name-error' : undefined
                    }
                  />
                  {formErrors.fullName && touchedFields.fullName ? (
                    <p id="full-name-error" className="text-error text-sm">
                      {formErrors.fullName}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-base">
                  <label
                    className="font-label-bold text-on-surface-variant uppercase text-xs tracking-widest"
                    htmlFor="phone-number"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone-number"
                    className={`${inputBaseClass} ${getFieldStateClass('phoneNumber')}`}
                    placeholder="08xxxxxxxxxx"
                    name="phoneNumber"
                    value={shippingForm.phoneNumber}
                    onBlur={handleFieldBlur}
                    onChange={handleFieldChange}
                    type="tel"
                    aria-invalid={Boolean(formErrors.phoneNumber)}
                    aria-describedby={
                      formErrors.phoneNumber ? 'phone-number-error' : undefined
                    }
                  />
                  {formErrors.phoneNumber && touchedFields.phoneNumber ? (
                    <p id="phone-number-error" className="text-error text-sm">
                      {formErrors.phoneNumber}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col gap-base">
                <label
                  className="font-label-bold text-on-surface-variant uppercase text-xs tracking-widest"
                  htmlFor="shipping-address"
                >
                  Shipping Address
                </label>
                <input
                  id="shipping-address"
                  className={`${inputBaseClass} ${getFieldStateClass('shippingAddress')}`}
                  placeholder="123 Eco-Friendly Lane"
                  name="shippingAddress"
                  value={shippingForm.shippingAddress}
                  onBlur={handleFieldBlur}
                  onChange={handleFieldChange}
                  type="text"
                  aria-invalid={Boolean(formErrors.shippingAddress)}
                  aria-describedby={
                    formErrors.shippingAddress ? 'shipping-address-error' : undefined
                  }
                />
                {formErrors.shippingAddress && touchedFields.shippingAddress ? (
                  <p id="shipping-address-error" className="text-error text-sm">
                    {formErrors.shippingAddress}
                  </p>
                ) : null}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">
                <div className="flex flex-col gap-base">
                  <label
                    className="font-label-bold text-on-surface-variant uppercase text-xs tracking-widest"
                    htmlFor="city"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    className={`${inputBaseClass} ${getFieldStateClass('city')}`}
                    placeholder="Thrift Town"
                    name="city"
                    value={shippingForm.city}
                    onBlur={handleFieldBlur}
                    onChange={handleFieldChange}
                    type="text"
                    aria-invalid={Boolean(formErrors.city)}
                    aria-describedby={formErrors.city ? 'city-error' : undefined}
                  />
                  {formErrors.city && touchedFields.city ? (
                    <p id="city-error" className="text-error text-sm">
                      {formErrors.city}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-base">
                  <label
                    className="font-label-bold text-on-surface-variant uppercase text-xs tracking-widest"
                    htmlFor="province"
                  >
                    Province
                  </label>
                  <select
                    id="province"
                    className={`${inputBaseClass} ${getFieldStateClass('province')}`}
                    name="province"
                    value={shippingForm.province}
                    onBlur={handleFieldBlur}
                    onChange={handleFieldChange}
                    aria-invalid={Boolean(formErrors.province)}
                    aria-describedby={formErrors.province ? 'province-error' : undefined}
                  >
                    <option value="" disabled>
                      Select Province
                    </option>
                    {indonesiaProvinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                  {formErrors.province && touchedFields.province ? (
                    <p id="province-error" className="text-error text-sm">
                      {formErrors.province}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-base">
                  <label
                    className="font-label-bold text-on-surface-variant uppercase text-xs tracking-widest"
                    htmlFor="zip-code"
                  >
                    ZIP Code
                  </label>
                  <input
                    id="zip-code"
                    className={`${inputBaseClass} ${getFieldStateClass('zipCode')}`}
                    placeholder="40111"
                    name="zipCode"
                    value={shippingForm.zipCode}
                    onBlur={handleFieldBlur}
                    onChange={handleFieldChange}
                    type="text"
                    inputMode="numeric"
                    aria-invalid={Boolean(formErrors.zipCode)}
                    aria-describedby={formErrors.zipCode ? 'zip-code-error' : undefined}
                  />
                  {formErrors.zipCode && touchedFields.zipCode ? (
                    <p id="zip-code-error" className="text-error text-sm">
                      {formErrors.zipCode}
                    </p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>

          <div className="bg-surface-container-lowest p-stack-lg border-2 border-on-background block-shadow rounded-lg">
            <h2 className="font-headline-lg text-headline-lg mb-stack-md">
              Pick your delivery vibe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
              {deliveryOptions.map((option) => (
                <DeliveryCard
                  key={option.id}
                  checked={selectedDelivery === option.id}
                  onChange={setSelectedDelivery}
                  option={option}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              formNoValidate
              onClick={handleCheckoutSubmit}
              className="bg-blush-base text-white px-section-gap py-stack-lg font-headline-lg text-headline-lg-mobile md:text-headline-lg rounded-lg border-2 border-eco-maroon block-shadow active-push transition-all flex items-center gap-stack-md"
            >
              Next: Payment
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>

        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-stack-lg">
          <div className="bg-surface-container-lowest p-stack-lg border-2 border-on-background block-shadow rounded-lg">
            <h3 className="font-headline-lg text-headline-lg mb-stack-md">
              Your Vibe Haul
            </h3>
            <div className="space-y-stack-md mb-stack-lg border-b-2 border-surface-variant pb-stack-lg">
              {cartItems.map((item) => (
                <CheckoutItem key={item.id} item={item} />
              ))}
            </div>

            <div className="space-y-stack-sm mb-stack-lg font-body-md">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">
                  Subtotal ({itemCount} Item{itemCount !== 1 ? 's' : ''})
                </span>
                <span className="font-bold">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Shipping</span>
                <span className="text-eco-maroon font-bold">
                  {activeDelivery.fee === 0 ? 'FREE' : formatPrice(activeDelivery.fee)}
                </span>
              </div>
              <div className="flex justify-between pt-stack-md mt-stack-md border-t-2 border-on-background">
                <span className="font-headline-lg text-headline-lg-mobile">Total</span>
                <span className="font-headline-lg text-headline-lg-mobile text-primary">
                  {formatPrice(total)}
                </span>
              </div>
            </div>

            <div className="bg-earth-moss p-stack-md rounded-lg flex items-start gap-stack-md border-2 border-on-background">
              <div className="bg-white p-2 rounded-full text-earth-moss flex items-center justify-center">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  eco
                </span>
              </div>
              <div>
                <p className="font-label-bold text-white text-sm">Your Eco-Impact</p>
                <p className="text-white text-xs leading-tight">
                  By choosing thrifted, you just saved{' '}
                  <span className="font-bold">{waterSaved.toLocaleString('id-ID')} liters</span>{' '}
                  of water. Nice move.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-highest p-stack-lg border-2 border-on-background rounded-lg">
            <label className="font-label-bold mb-base block" htmlFor="promo-code">
              Got a vibe-code?
            </label>
            <div className="flex gap-base">
              <input
                id="promo-code"
                className="vibe-input p-base flex-grow border-2 border-on-background rounded-lg bg-surface text-sm"
                placeholder="Enter code"
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                type="button"
                className="bg-sun-yellow px-stack-md py-base font-label-bold border-2 border-on-background rounded-lg active-push"
              >
                Apply
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
