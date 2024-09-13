import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const GlobalContext = createContext();

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

const initialState = {
  userData: {
    theme: "LIGHT",
    favoriteDentists: [],
  },
  responseData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        userData: {
          ...state.userData,
          theme: state.userData.theme === "DARK" ? "LIGHT" : "DARK",
        },
      };
    case "SET_USER_STATE":
      return { ...state, userData: action.payload };
    case "SET_RESPONSE_DATA":
      return { ...state, responseData: action.payload };
    case "SET_FAVORITE_DENTIST":
      return {
        ...state,
        userData: {
          ...state.userData,
          favoriteDentists: [...state.userData.favoriteDentists, action.payload],
        },
      };
    case 'UPDATE_FAVORITE_DENTIST_LIST':
      return{
        ...state,
        userData: {
          ...state.userData,
          favoriteDentists: action.payload
        }
      };
    default:
      return state
  }
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  const setDataInStorage = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
  };

  const getDataFromStorage = () => {
    const localData = localStorage.getItem("userData");
    if (localData) {
      dispatch({ type: "SET_USER_STATE", payload: JSON.parse(localData) });
    }
  };

  useEffect(() => {
    getDataFromStorage();
    axios(url).then((res) => {
      dispatch({ type: "SET_RESPONSE_DATA", payload: res.data });
    });
  }, []);

  useEffect(() => {
    setDataInStorage(state.userData);
  }, [state.userData]);

  const changeTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const checkFavorite = (id) => {
    const existsFavorite = state.userData.favoriteDentists.some((dentist) => dentist.id === id);
    if(existsFavorite){
      return true;
    }else{
      return false;
    }
  }

  const deleteFavorite = (id) => {
    const newList = []
    state.userData.favoriteDentists.map((dentist) =>{
      if(dentist.id !== id){
        newList.push(dentist)
      }
    })
    return dispatch({type: 'UPDATE_FAVORITE_DENTIST_LIST', payload: newList})
  }

  const addFavorite = (id) => {
    const favorite = state.responseData.find(dentist => dentist.id === id);
    dispatch({ type: "SET_FAVORITE_DENTIST", payload: favorite });
  };

  const favorite = (id) => {
    const isFavorite = state.userData.favoriteDentists.some((dentist) => dentist.id === id);
  
    if (isFavorite) {
      deleteFavorite(id);
    } else {
      addFavorite(id);
    }
  };
  
  const favoriteDentists = () =>{
    return state.userData.favoriteDentists
  }

  return (
    <GlobalContext.Provider value={{ state, dispatch, changeTheme, favorite, checkFavorite, favoriteDentists }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, Context, useGlobalContext };

