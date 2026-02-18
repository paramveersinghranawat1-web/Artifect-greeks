// utils/googleSheet.js

export const sendLeadToSheet = async (data) => {
  // 1. FIXED: Removed the semicolon inside the URL string
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzPo8CnnX0yRXVQndiL9_S0i-0QN0pZkskXyNm4vVWHv072szNE-jUhXqBLDa2XyNYsGw/exec";

  try {
    const formData = new URLSearchParams();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: formData, 
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Google Sheet Error:", error);
    throw error;
  }
};