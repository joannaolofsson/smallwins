// Future self
export type InputType = "Habit" | "Accomplishment" | "Gift" ;

export interface InputItem {
  id: string;
  user_id: string;
  category: "Habit" | "Accomplishment" | "Gift";
  name: string;
  created_at?: string;
}

export interface FutureInput {
  name: string; 
  category?: string; 
  created_at?: string; 
  [key: string]: any; 
}

export interface InputProps {
    username: string;
    userId: string;
    initialInputs: InputItem[];
}

export interface FutureContextProps {
  inputFuture: any[]; 
  fetchInputs: () => Promise<void>;
  addInput: (category: string, name: string) => Promise<void>;
  deleteInput: (id: string) => Promise<void>;
}

// Smallwin 
export type SmallWinCategory = "habit" | "accomplishment" | "gift" | "manual";

export interface Input {
  id: string;
  name: string;
  category: SmallWinCategory; // ✅ Ensure proper typing here
  created_at: string;
}


export type WinFormValues = {
  message: string;
  emotion: string;
  category: SmallWinCategory; 
  input_future: string;
};

export interface WinInput {
  id: string;
  inputFuture: string;
  message: string;
  icon: string;
  encouragement: string;
  color: string;
  category: SmallWinCategory; // Mandatory field
  emotion?: string;
}

  export interface WinProviderProps {
    smallWins: WinInput[]; // Array of wins
    addWin: (input: Omit<WinInput, 'id'>) => Promise<void>; // Function to add a win
    clearAllWins: () => void; // Function to clear all wins
    existingWin?: WinInput; // Single win for comparison
  }
  



export interface SmallWinProps {
  selectedCategory: string;
}
  
// Encouragements

export interface BoosterProp {
  limit: number;
}

export type EncouragementCategory = 'habit' | 'accomplishment' | 'gift';

export type Encouragement = {
  icon: string;
  encouragement: string;
  color: string;
  category: EncouragementCategory;
}

export type Booster = {
  encouragement: string;
  icon: string;
  color: string;
  category: string;
};
