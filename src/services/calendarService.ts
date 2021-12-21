export interface ITiming {
  time: string;
  description: string;
}

export function getTimings() : ITiming[] {
  const timings: ITiming[] = [];
  
  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, '0');
    
    timings.push({ 
      time: `${hour}:00`,
      description: 'Random description',
    });

    timings.push({ 
      time: `${hour}:30`,
      description: 'It\'s half an hour',
    });
  }
  return timings;
}