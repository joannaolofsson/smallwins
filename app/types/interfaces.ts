


// Futureself/types
export type InputType = "Habit" | "Accomplishment" | "Gift" | "Manual";

// Futureself/interface

export interface InputItem {
  id: string;
  user_id: string;
  category: "Habit" | "Accomplishment" | "Gift" | "Manual";
  name: string;
  created_at?: string;
}

export interface FutureInput {
  name: string; // Name of the item
  category?: string; // Habit, Gift, Accomplishment
  created_at?: string; // Timestamp
  [key: string]: any; // Additional dynamic fields (if needed)
}

export interface InputProps {
    username: string;
    userId: string;
    initialInputs: InputItem[];
}

export interface FutureContextProps {
  inputFuture: any[]; // Changed from `inputs` to `inputFuture`
  fetchInputs: () => Promise<void>;
  addInput: (category: string, name: string) => Promise<void>;
  deleteInput: (id: string) => Promise<void>;
}


// Smallwin / types
export type SmallWinCategory = "habit" | "accomplishment" | "gift" | "manual";

export type WinFormValues = {
  message: string;
  emotion: string;
  category: SmallWinCategory; // Include category in form values
  input_future: string;
};


//export interface SmallWinItem {
  //uniqueKey: string;
  //category: string;
  //icon: string; 
  //winmessage: string;
  //encouragement: string;
  //color: string;
//}

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




//export interface icons {
    //habit: string[];
    //accomplishment: string[];
    //gift: string[];
    //encouragement: string[];
    //color: string[];
  //}

  //export interface SmallWin {
    //inputId: string;
    //id: string;
    //winmessage: string;
    //icon: string;
    //encouragement: string;
    //color: string;
    //category?: string;
    //emotion?: string;
  //}

  export interface WinProviderProps {
    smallWins: WinInput[]; // Array of wins
    addWin: (input: Omit<WinInput, 'id'>) => Promise<void>; // Function to add a win
    clearAllWins: () => void; // Function to clear all wins
    existingWin?: WinInput; // Single win for comparison
  }
  
  export type Input = {
    id: string;
    name: string;
    category: string;
    created_at: string;
  };
  
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
