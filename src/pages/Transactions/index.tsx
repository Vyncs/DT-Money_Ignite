import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import {
  PriceHighLigth,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";
import {TransactionsContext} from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const {transactions} = useContext(TransactionsContext)
  
  return (
    <div>
      <Header></Header>
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transactions) => {
              return (
                <tr key={transactions.id}>
                  <td width="50%">{transactions.description}</td>
                  <td>
                    <PriceHighLigth variant={transactions.type}>
                      {transactions.type === 'outcome' && '- '}
                      {priceFormatter.format(transactions.price)}
                    </PriceHighLigth>
                  </td>
                  <td>{transactions.category}</td>
                  <td>{dateFormatter.format(new Date(transactions.createdAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
