const initialState = { value: '' };

export default (state = initialState, action) => {
   if (action.type === 'DIVISA_TO_EXCHANGE') {
      return {
         ...state,
         value: action.value
      }
   }

   return state;
};

export const activeDivisaBase = state => state.divisaBaseReducer.value;
