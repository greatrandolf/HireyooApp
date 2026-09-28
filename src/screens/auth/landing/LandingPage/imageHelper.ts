// Helper to generate image paths based on platform
export const getDashboardImagePath = (): string => {
  // For development/testing, use a placeholder
  // Replace with your actual image path once added
  
  // Option 1: Using public assets folder (best for Expo)
  return '/assets/images/dashboard.png';
  
  // Option 2: Using require() with base64
  // This requires the image file to exist
  // return require('../../../assets/images/dashboard.png');
  
  // Option 3: Using a placeholder until image is ready
  // return 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 800%22%3E%3Crect fill=%22%23f5f8f9%22 width=%221200%22 height=%22800%22/%3E%3Ctext x=%22600%22 y=%22400%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2224%22%3EDashboard Image Coming Soon%3C/text%3E%3C/svg%3E';
};
