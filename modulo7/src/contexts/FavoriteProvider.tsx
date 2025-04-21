
import { createContext } from "react";

type FavoriteContextType = { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeFavorite: (id_user: number, id_book: number) => Promise<any>;
};

const FavoriteContext = createContext<FavoriteContextType>({
  changeFavorite: async () => {},
});

type FavoriteProviderProps = {
  children: React.ReactNode;
};

const {
  VITE_API_ORIGIN
} = import.meta.env

function FavoriteProvider(props:FavoriteProviderProps) {

  const { children } = props;

  async function changeFavorite(id_user:number, id_book:number) {
    const url = new URL(`${VITE_API_ORIGIN}/favorite`);
    return await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ id_user, id_book }),
    });
  }

  return (
    <>
      <FavoriteContext.Provider value={{ changeFavorite }}>
        {children}
      </FavoriteContext.Provider>
    </>
  )
}

export default FavoriteProvider;
export { FavoriteContext };