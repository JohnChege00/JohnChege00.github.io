(function () {
  "use strict";
  var DATA = window.ESTIMATOR_PRICING;
  var form = document.querySelector("[data-estimator-form]");
  if (!form || !DATA) return;
  var typeList = form.querySelector("[data-type-list]");
  var addonList = form.querySelector("[data-addon-list]");
  var designList = form.querySelector("[data-design-list]");
  var pagesInput = form.querySelector("[data-pages-input]");
  var resultMin = form.querySelector("[data-result-min]");
  var resultMax = form.querySelector("[data-result-max]");
  var resultUsd = form.querySelector("[data-result-usd]");
  var breakdownList = form.querySelector("[data-breakdown]");
  var summaryType = form.querySelector("[data-summary-type]");

  function formatKes(n) {
    return "KES " + Math.round(n).toLocaleString("en-KE");
  }
  function formatUsd(n) {
    return "~$" + Math.round(n).toLocaleString("en-US");
  }

  DATA.siteTypes.forEach(function (type, i) {
    var id = "type-" + type.id;
    var wrap = document.createElement("label");
    wrap.className = "estimator-option";
    wrap.setAttribute("for", id);
    wrap.innerHTML =
      '<input type="radio" name="site-type" id="' + id + '" value="' + type.id + '"' + (i === 0 ? " checked" : "") + '>' +
      '<span class="estimator-option-body">' +
      '<span class="estimator-option-title">' + type.label + "</span>" +
      '<span class="estimator-option-desc">' + type.description + "</span>" +
      "</span>";
    typeList.appendChild(wrap);
  });

  DATA.addons.forEach(function (addon) {
    var id = "addon-" + addon.id;
    var wrap = document.createElement("label");
    wrap.className = "estimator-check";
    wrap.setAttribute("for", id);
    var noteHtml = addon.note ? '<span class="estimator-pages-note">' + addon.note + "</span>" : "";
    wrap.innerHTML =
      '<input type="checkbox" name="addon" id="' + id + '" value="' + addon.id + '">' +
      '<span><span>' + addon.label + "</span>" + noteHtml + "</span>";
    addonList.appendChild(wrap);
  });

  DATA.design.forEach(function (d, i) {
    var id = "design-" + d.id;
    var wrap = document.createElement("label");
    wrap.className = "estimator-check";
    wrap.setAttribute("for", id);
    wrap.innerHTML =
      '<input type="radio" name="design" id="' + id + '" value="' + d.id + '"' + (i === 0 ? " checked" : "") + '>' +
      "<span>" + d.label + "</span>";
    designList.appendChild(wrap);
  });

  function calculate() {
    var typeId = form.querySelector('input[name="site-type"]:checked').value;
    var type = DATA.siteTypes.find(function (t) { return t.id === typeId; });
    var min = type.base.min;
    var max = type.base.max;
    var breakdown = [{ label: type.label, min: type.base.min, max: type.base.max }];

    var pages = parseInt(pagesInput.value, 10) || DATA.basePagesIncluded;
    var extraPages = Math.max(0, pages - DATA.basePagesIncluded);
    if (extraPages > 0) {
      var pageMin = extraPages * DATA.perExtraPage.min;
      var pageMax = extraPages * DATA.perExtraPage.max;
      min += pageMin;
      max += pageMax;
      breakdown.push({ label: extraPages + " extra page" + (extraPages > 1 ? "s" : ""), min: pageMin, max: pageMax });
    }

    form.querySelectorAll('input[name="addon"]:checked').forEach(function (input) {
      var addon = DATA.addons.find(function (a) { return a.id === input.value; });
      if (addon) {
        min += addon.cost.min;
        max += addon.cost.max;
        breakdown.push({ label: addon.label, min: addon.cost.min, max: addon.cost.max });
      }
    });

    var designId = form.querySelector('input[name="design"]:checked').value;
    var design = DATA.design.find(function (d) { return d.id === designId; });
    if (design && design.cost.max > 0) {
      min += design.cost.min;
      max += design.cost.max;
      breakdown.push({ label: design.label, min: design.cost.min, max: design.cost.max });
    }

    resultMin.textContent = formatKes(min);
    resultMax.textContent = formatKes(max);
    resultUsd.textContent = formatUsd(min / DATA.approxUsdRate) + " - " + formatUsd(max / DATA.approxUsdRate);
    summaryType.textContent = type.label;

    breakdownList.innerHTML = breakdown
      .map(function (item) {
        var range = item.min === item.max
          ? (item.min === 0 ? "Included" : formatKes(item.min))
          : formatKes(item.min) + " - " + formatKes(item.max);
        return '<li><span>' + item.label + '</span><span class="estimator-breakdown-amount">' + range + "</span></li>";
      })
      .join("");
  }

  form.addEventListener("change", calculate);
  pagesInput.addEventListener("input", calculate);
  calculate();
})();
