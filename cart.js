const cartDisplayContainer = document.querySelector('.cart-data-display')
const cartContainer = document.querySelector('.cart-container')
const getCartData = JSON.parse(localStorage.getItem('cart') || [])

const applyButton = document.querySelector('#apply')
 console.log(applyButton)




// console.log(cartDisplayContainer)

function shoppingCartValueUpdate() {
    const cartHeading = document.querySelector('.cart-heading')
    cartHeading.textContent = `ShoppingCart (${getCartData.length})`
}

//console.log(getCartData)

function LoadCart() {
    cartDisplayContainer.innerHTML = ""
    getCartData.forEach(function (elem, index) {
        cartDisplayContainer.innerHTML += ` <div class="cart" id=${index}>
                                <div class="left"> 
                                    <img src="${elem.image}" alt="">
                                    <div class="product-details-info">
                                        <h5>${elem.title}</h5>
                                        <p>₹${elem.price}</p>
                                        <div class="discount-info">
                                            <p>₹${elem.originalprice}</p>
                                            <p>${elem.discount}</p>
                                        </div>
                                        <p>${elem.size}</p>
                                       <h4 class="remove-product">Remove</h4>
                                    </div>
                                </div>
                                <div class="right">
                                    <h4>₹${elem.price}</h4>
                                </div>
                            </div>`
    })
}




// find the total sum in the cart
let totalSum = 0;
function findTotalSum() {
    getCartData.forEach(function (elem) {
        totalSum += elem.price
    })
    const finalAmount = document.querySelector('#final-amount')
    finalAmount.textContent = `₹${totalSum}`

    const grandTotal = document.querySelector('#grandtotal')
    grandTotal.textContent = `₹${totalSum}`


    console.log(totalSum, 'inside the function findtotal sum')
}

// find the original price for discount
let originalprice = 0;
let FindDiscount;
function findActualPrice() {
    getCartData.forEach(function (elem) {
        originalprice += elem.originalprice
    })

    FindDiscount = originalprice - totalSum

    const discountOnMrp = document.querySelector("#discount-on-mrp")
    discountOnMrp.textContent = `₹${FindDiscount}`

    console.log(FindDiscount, 'discount price')
}

function UseCouponAmount500() {
    let grandTotalAmount = document.querySelector('#grandtotal')
    totalSum -= 500

    grandTotalAmount.textContent = `₹${totalSum}`
}

function RemoveCouponAmount500() {

    let grandTotalAmount = document.querySelector('#grandtotal')
    totalSum += 500

    grandTotalAmount.textContent = `₹${totalSum}`
}

function AddCouponCodeFor500(getCouponCode){
    let no_coupon_applied_area = document.querySelector('.no-coupon-applied h4')
    no_coupon_applied_area.textContent = `${getCouponCode.textContent}`
    let discount_on_coupon = document.querySelector('#discount-oncoupon')
    discount_on_coupon.textContent = `-₹500`
    UseCouponAmount500()
}

function RemoveCouponCodeFor500(){
    let no_coupon_applied_area = document.querySelector('.no-coupon-applied h4')
    no_coupon_applied_area.innerHTML = `<h4> <i class="ri-discount-percent-line"></i>No Coupon Applied</h4>`

    let discount_on_coupon = document.querySelector('#discount-oncoupon')
    discount_on_coupon.textContent = `-₹0`
    RemoveCouponAmount500()
}


function UseCouponAmount800(){
    let grandTotalAmount = document.querySelector('#grandtotal')
    totalSum -= 800

    grandTotalAmount.textContent = `₹${totalSum}`
    
}

function RemoveCouponAmount800(){
    let grandTotalAmount = document.querySelector('#grandtotal')
    totalSum += 800

    grandTotalAmount.textContent = `₹${totalSum}`
}

function HandleCouponCodeFor800(getCouponCode) {
    let no_coupon_applied_area = document.querySelector('.no-coupon-applied h4')
    no_coupon_applied_area.textContent = `${getCouponCode.textContent}`
    let discount_on_coupon = document.querySelector('#discount-oncoupon')
    discount_on_coupon.textContent = `-₹800`

    UseCouponAmount800()
}



function RemoveCouponCodeFor800(){
    let no_coupon_applied_area = document.querySelector('.no-coupon-applied h4')
    no_coupon_applied_area.innerHTML = `<h4> <i class="ri-discount-percent-line"></i>No Coupon Applied</h4>`

    let discount_on_coupon = document.querySelector('#discount-oncoupon')
    discount_on_coupon.textContent = `-₹0`

    RemoveCouponAmount800()
}




// coupon Apply Code
function CouponApply() {
    const couponsContainer = document.querySelector('.coupons-container')
    couponsContainer.addEventListener('click', function (e) {
        if (e.target.id === "coupon-apply-one") {
            document.querySelector('#coupon-apply-two').disabled = true
            console.log('apply')
            if (getCartData.length >= 3) {
                const getDiscountInfoData = e.target.previousElementSibling
                const getCouponCode = getDiscountInfoData.querySelector('h4')

                let getApplyText = e.target.textContent
                if (getApplyText === "Apply") {

                    AddCouponCodeFor500(getCouponCode)
                    e.target.textContent = "Remove"

                } else {
                    e.target.textContent = "Apply"
                    RemoveCouponCodeFor500()
                    document.querySelector('#coupon-apply-two').disabled = false
                }
            }
        }
        if (e.target.id === 'coupon-apply-two') {
            document.querySelector('#coupon-apply-one').disabled = true
            if (getCartData.length >= 4) {
                const getDiscountInfoData = e.target.previousElementSibling
                const getCouponCode = getDiscountInfoData.querySelector('h4')
                let getApplyText = e.target.textContent
                if (getApplyText === "Apply") {
                    HandleCouponCodeFor800(getCouponCode)
                    e.target.textContent = "Remove"
                } else {
                    RemoveCouponCodeFor800()
                    e.target.textContent = "Apply"
                    document.querySelector('#coupon-apply-one').disabled = false
                    
                }
            }
        }
    })
}

CouponApply()

applyButton.addEventListener('click', function(e){
    

    const getInput = document.querySelector('input')
    if(getInput.value === "")return

    const getCouponCode = getInput.value.toUpperCase()

    if(getCouponCode === "BG3800" && getCartData.length>=4){
        if(e.target.textContent === "APPLY"){
            let discount_on_coupon = document.querySelector('#discount-oncoupon')
            discount_on_coupon.textContent = `-₹800`
        
            UseCouponAmount800()
            e.target.textContent = "REMOVE"
            getInput.disabled = true
        }else{
            let discount_on_coupon = document.querySelector('#discount-oncoupon')
            discount_on_coupon.textContent = `-₹0`
            RemoveCouponAmount800()

            e.target.textContent = "APPLY"
            getInput.value = "Enter Your Coupon Code"
            getInput.disabled = false
        }
    }else if(getCouponCode === "BG3500" && getCartData.length>=3){
        if(e.target.textContent === "APPLY"){
            let discount_on_coupon = document.querySelector('#discount-oncoupon')
            discount_on_coupon.textContent = `-₹500`
            UseCouponAmount500()
            e.target.textContent = "REMOVE"
            getInput.disabled = true
        
        }else{
            let discount_on_coupon = document.querySelector('#discount-oncoupon')
            discount_on_coupon.textContent = `-₹0`
            RemoveCouponAmount500()
            e.target.textContent  = "APPLY"
            getInput.value = "Enter Your Coupon Code"
            getInput.disabled = false
        }
    }else{
        getInput.value = "INVALID COUPON CODE"

    }

})


cartContainer.addEventListener('click', function (e) {


    if (e.target.className === 'remove-product') {
        const getProductId = e.target.closest('.cart').id
        getCartData.splice(getProductId, 1)
        localStorage.setItem('cart', JSON.stringify(getCartData))
        LoadCart()

        totalSum = 0;
        originalprice = 0
        findTotalSum()
        findActualPrice()
        shoppingCartValueUpdate()

        console.log(getCartData.length, 'inside the remove click functionality')


    }

})
LoadCart()
findTotalSum()
findActualPrice()
shoppingCartValueUpdate()




//console.log(getCartData.length, 'in global')
//function to find the total sum
