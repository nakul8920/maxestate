// Google Sheets integration utility
export interface FormData {
  fullName: string;
  phone: string;
  email?: string;
  message?: string;
  source: string; // Where the form was submitted from
  timestamp: string;
}

// Google Sheets Web App URL - Replace with your actual Google Apps Script web app URL
const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxtmK7MLjOf-dx7mTE5Ju6IDMXZersip5F1H5zDkCivnCe5aPauEV7OT1746BDOhI4/exec';

export const submitToGoogleSheets = async (formData: FormData): Promise<boolean> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Since we're using no-cors mode, we can't check the response status
    // But we assume it's successful if no error is thrown
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
};

// Alternative method using Google Forms (if you prefer)
export const submitToGoogleForm = async (formData: FormData): Promise<boolean> => {
  try {
    // Google Form URL - Replace with your actual Google Form URL
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
    
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('entry.XXXXXXXX', formData.fullName); // Replace with actual entry IDs
    formDataToSubmit.append('entry.XXXXXXXX', formData.phone);
    formDataToSubmit.append('entry.XXXXXXXX', formData.email || '');
    formDataToSubmit.append('entry.XXXXXXXX', formData.message || '');
    formDataToSubmit.append('entry.XXXXXXXX', formData.source);
    formDataToSubmit.append('entry.XXXXXXXX', formData.timestamp);

    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formDataToSubmit,
    });

    return true;
  } catch (error) {
    console.error('Error submitting to Google Form:', error);
    return false;
  }
};
