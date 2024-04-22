import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import runChat from "../../config/gemini";

export interface fetchGeminiResultArgs {
  prompt: string;
}
interface fetchGeminiResultResponse {
  result: string;
}
export const fetchGeminiResult = createAsyncThunk<
  fetchGeminiResultResponse,
  fetchGeminiResultArgs
>("fetch/geminiResult", async ({ prompt }) => {
  const result = await runChat(prompt);
  return { result };
});
type initialStateYpe = {
  loading: boolean;
  result: string | undefined;
  showResult:boolean;
  error: string | undefined;
  
};

const initialState: initialStateYpe = {
  loading: false,
  result: undefined,
  showResult:false,
  error: undefined,
};
const geminiSlice = createSlice({
  name: "geminiSlice",
  reducers: {
    getResult:(state)=>{
      state.loading = true;
      let responseString = state.result?.replace(/\*\*(.*?)\*\*/g, '<br><span class="heading">$1</span><br>') 
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/\*/g,'<br>');
    
      state.result=responseString;
      console.log(responseString)
      state.loading=false;
      state.showResult=true;
     

    }
   
  },
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGeminiResult.pending, (state) => {
      state.loading = true;
      state.result = undefined;
      state.error = undefined;
    }),
      builder.addCase(fetchGeminiResult.fulfilled, (state, action) => {
        state.loading = false;
        state.result = action.payload.result;
        state.error = undefined;
      });
    builder.addCase(fetchGeminiResult.rejected, (state, action) => {
      state.loading = false;
      state.result = undefined;
      state.error = action.error.message || "any error occured";
    });
  },
});

export default geminiSlice.reducer;
export const {getResult} = geminiSlice.actions;
