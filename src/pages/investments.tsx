import React, { useEffect, useState } from 'react'
import { FlatList, ListRenderItem } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native'
import { getInvestmentCategories } from '../services/investmentCategoryService';
import Button from '../shared/button';
import Text from '../shared/text';
import { IInvestmentCategory } from './../services/investmentCategoryService';

const InvestmentsContainer = styled.View`
  flex: 1;
  padding: 0 ${props => props.theme.horizontalWhitespace};
`;

const GeneralInfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 20px 0;
`;

const BalanceLabel = styled(Text)`
  font-size: 16px;
`;

const BalanceValue = styled(Text)`
  font-size: 18px;
`;

const ExpensesLabel = styled(Text)`
  font-size: 16px;
`;

const ExpensesValue = styled(Text)`
  font-size: 18px;
`;

const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 15px 0;
`;

const StyledIcon = styled(Icon)`
  color: ${props => props.theme.backgroundColor.contrast};
`;

const ExpensesCategory = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  padding: 20px 30px;
  margin-bottom: 5px;
  
  background-color: ${props => props.theme.foregroundColor};
`;

const ExpensesCategoryDescription = styled(Text)`
  overflow: hidden;

  font-size: 16px;

  color: ${props => props.theme.investmentColor.main};
`;

const ExpensesCategoryValue = styled(Text)`
  font-size: 16px;
`;

export default function Investments() {
  const DEFAULT_ICON_SIZE = 20;

  const [categories, setCategories] = useState<IInvestmentCategory[]>([]);

  useEffect(() => {
    setCategories(getInvestmentCategories());
  }, []);

  const renderItem: ListRenderItem<IInvestmentCategory> = ({ item }: { item: IInvestmentCategory }) => (
    <ExpensesCategory key={item.description}>
      <ExpensesCategoryDescription>{item.description}</ExpensesCategoryDescription>
      <ExpensesCategoryValue>R$ {item.value.toLocaleString()}</ExpensesCategoryValue>
    </ExpensesCategory>
  )

  return (
    <InvestmentsContainer>
      <GeneralInfoContainer>
        <BalanceLabel>Saldo disponível: <BalanceValue >R$1000,00</BalanceValue></BalanceLabel>
        <ExpensesLabel>Gastos: <ExpensesValue>R$500,00</ExpensesValue></ExpensesLabel>
      </GeneralInfoContainer>

      <HeaderContainer>
        <Button type="clear" icon={<StyledIcon name="edit" size={DEFAULT_ICON_SIZE} />} />
        <Button type="clear" icon={<StyledIcon name="plus" size={DEFAULT_ICON_SIZE} />} />
      </HeaderContainer>

      <FlatList<IInvestmentCategory>
        data={categories}
        renderItem={renderItem}
        keyExtractor={(category: IInvestmentCategory) => category.description}
       />
    </InvestmentsContainer>
  )
}
