import { FC, useState, createContext } from 'react';

export interface ICard {
  _id: string;
  title: string;
  descr: string;
  shouldBeShown: boolean;
  date: string;
}

const useValue = () => {
  const [list, setList] = useState<ICard[]>([]);

  const clearList = () => {
    setList([]);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item._id !== id));
  };

  const addItems = (items: ICard[]) => {
    const newList = [...list];

    items.forEach((item) => {
      const findById = list.findIndex((l) => l._id === item._id);
      // if item with this id already in, skip
      if (findById === -1) {
        newList.push(item);
      }
    });

    setList(newList);
  };

  const up = (id) => {
    let newList = [...list];
    let index = newList.findIndex((e) => e._id == id);
    if (index > 0) {
      let el = newList[index];
      newList[index] = newList[index - 1];
      newList[index - 1] = el;
    }
    setList(newList);
  };

  const down = (id) => {
    let newList = [...list];
    let index = list.findIndex((e) => e._id == id);
    if (index !== -1 && index < newList.length - 1) {
      let el = newList[index];
      newList[index] = newList[index + 1];
      newList[index + 1] = el;
    }
    setList(newList);
  };

  return {
    list,
    setList,
    removeItem,
    clearList,
    addItems,
    up,
    down,
  };
};

export const CardListContext = createContext({} as ReturnType<typeof useValue>);

export const CardListContextProvider: FC<{}> = (props) => {
  return (
    <CardListContext.Provider value={useValue()}>
      {props.children}
    </CardListContext.Provider>
  );
};
