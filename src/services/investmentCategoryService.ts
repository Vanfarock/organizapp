export interface IInvestmentCategory {
  description: string;
  value: number;
}

export function getInvestmentCategories() : IInvestmentCategory[] {
  const categories: IInvestmentCategory[] = [
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