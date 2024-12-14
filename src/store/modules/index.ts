export interface CurrencyState {
    selectedCurrency: string;
}

export interface RootState {
    currency: CurrencyState;
}