export function formatDate(date:any) {
    
    date = new Date(date);
    const options = {
      weekday: 'short', // Sun
      month: 'short' ,
      day: '2-digit', 
        
    };
  
    return date.toLocaleDateString('en-US', options);
  }