export interface InvestmentCategory {
  description: string;
  value: number;
}

export function getInvestmentCategories() : InvestmentCategory[] {
  const categories: InvestmentCategory[] = [
    {
      description: 'Água',
      value: 100.05,
    },
    {
      description: 'Luz',
      value: 432,      
    },
    {
      description: 'Presentes',
      value: 34.11,
    },
  ];
  
  return categories;
}