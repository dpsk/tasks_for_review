var PriceCalculator = {};

PriceCalculator.EMS = "ems"
PriceCalculator.PRIORITY = "priority"
PriceCalculator.COURIER = "courier"

PriceCalculator.moveFastFee = 15

PriceCalculator.weightEl = document.getElementById("weight")
PriceCalculator.totalEl = document.getElementById("total")
PriceCalculator.elements = new Array();
PriceCalculator.elements[PriceCalculator.EMS] = document.getElementById("ems");
PriceCalculator.elements[PriceCalculator.PRIORITY] = document.getElementById("priority");
PriceCalculator.elements[PriceCalculator.COURIER] = document.getElementById("courier");


PriceCalculator.processingFees = new Array();
PriceCalculator.processingFees[PriceCalculator.EMS] = 10;
PriceCalculator.processingFees[PriceCalculator.PRIORITY] = 15;
PriceCalculator.processingFees[PriceCalculator.COURIER] = 20;


PriceCalculator.pricePerKg = new Array();
PriceCalculator.pricePerKg[PriceCalculator.EMS] = 1.5;
PriceCalculator.pricePerKg[PriceCalculator.PRIORITY] = 5;
PriceCalculator.pricePerKg[PriceCalculator.COURIER] = 15;

PriceCalculator.maxWeight = new Array();
PriceCalculator.maxWeight[PriceCalculator.EMS] = 30;
PriceCalculator.maxWeight[PriceCalculator.PRIORITY] = 22;
PriceCalculator.maxWeight[PriceCalculator.COURIER] = 10;

PriceCalculator.calculateTotal = function() {
    PriceCalculator.checkWeight(parseFloat(PriceCalculator.weightEl.value));
    PriceCalculator.calculateFees();
}
PriceCalculator.updatePrice = function(text) {
    PriceCalculator.totalEl.innerHTML = text;
}
PriceCalculator.checkWeight = function(weight) {
    var noOptions = true
    for (var key in PriceCalculator.maxWeight) {
        if (PriceCalculator.maxWeight.hasOwnProperty(key)) {
            if (weight > PriceCalculator.maxWeight[key]) {
                PriceCalculator.elements[key].disabled = true;
                PriceCalculator.elements[key].checked = false;
            } else {
                var noOptions = false
                PriceCalculator.elements[key].disabled = false;
            };
        }
    }
    if (noOptions) {
        PriceCalculator.updatePrice("This parcel is over processing limits and could not be delivered.")
    }
}
PriceCalculator.calculateFees = function() {
    checkedProvider = document.querySelector('input[name="provider"]:checked')

    if (checkedProvider && PriceCalculator.weightEl.value) {
        PriceCalculator.calculateFeesForProvider(checkedProvider.getAttribute("id"), parseFloat(PriceCalculator.weightEl.value))
    }
}
PriceCalculator.calculateFeesForProvider = function(provider, weight) {
    price = PriceCalculator.moveFastFee + PriceCalculator.processingFees[provider] + (PriceCalculator.pricePerKg[provider] * weight)
    PriceCalculator.updatePrice("$" + price.toString())
}