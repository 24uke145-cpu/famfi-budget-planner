/*
  Client-side receipt OCR starter. OCR runs in the browser via Tesseract.js.
  It suggests values for review; it does NOT guarantee correct extraction.
  Add <input id="receiptFile" type="file" accept="image/*,.pdf"> and
  a button with id="scanReceipt" to your page, then connect the returned
  values to the expense form.
*/
async function famfiScanReceipt(file) {
  if (!file) throw new Error("Choose a receipt image first.");
  if (file.type === "application/pdf") {
    throw new Error("For this starter, upload a clear receipt photo (JPG/PNG). PDF OCR needs a PDF-to-image step.");
  }
  if (!window.Tesseract) throw new Error("OCR library is not loaded.");
  const result = await window.Tesseract.recognize(file, "eng");
  const text = result.data.text || "";
  const amountCandidates = text.match(/(?:₹|Rs\.?|INR)?\s*\d{1,7}(?:,\d{3})*(?:\.\d{2})?/gi) || [];
  const amounts = amountCandidates.map(s => Number(s.replace(/[^\d.]/g, ""))).filter(n => Number.isFinite(n) && n > 0);
  const dateMatch = text.match(/\b(20\d{2})[-/](\d{1,2})[-/](\d{1,2})\b|\b(\d{1,2})[-/](\d{1,2})[-/](20\d{2})\b/);
  let date = "";
  if (dateMatch) {
    if (dateMatch[1]) date = `${dateMatch[1]}-${String(dateMatch[2]).padStart(2,"0")}-${String(dateMatch[3]).padStart(2,"0")}`;
    else date = `${dateMatch[6]}-${String(dateMatch[5]).padStart(2,"0")}-${String(dateMatch[4]).padStart(2,"0")}`;
  }
  return {
    text,
    suggestedAmount: amounts.length ? Math.max(...amounts) : null,
    suggestedDate: date,
    reviewRequired: true
  };
}
window.famfiScanReceipt = famfiScanReceipt;
