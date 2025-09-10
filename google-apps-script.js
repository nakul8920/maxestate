// Google Apps Script for Google Sheets Integration
// Copy this code to Google Apps Script (script.google.com) and deploy as a web app

function doPost(e) {
  try {
    // Get the data from the POST request
    const data = JSON.parse(e.postData.contents);
    
    // Open the Google Sheet (replace with your actual sheet ID)
    const sheetId = '1ghWDc_uPHCWAEDloAr3OaQFZQjgsPADzIhKqEymVd_g';
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.fullName || '',
      data.phone || '',
      data.email || '',
      data.message || '',
      data.source || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (optional)
  return ContentService
    .createTextOutput(JSON.stringify({ message: 'Google Sheets API is working' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Setup function to create headers in the sheet (run this once)
function setupSheet() {
  const sheetId = '1ghWDc_uPHCWAEDloAr3OaQFZQjgsPADzIhKqEymVd_g';
  const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  
  // Add headers
  const headers = ['Timestamp', 'Full Name', 'Phone', 'Email', 'Message', 'Source'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.getRange(1, 1, 1, headers.length).setBackground('#f0f0f0');
}
