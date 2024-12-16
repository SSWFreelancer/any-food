export interface CurrencyState {
    selectedCurrency: string;
}

export interface AuthState {
    name: string;
}

export interface RootState {
    currency: CurrencyState;
    auth: AuthState;
}