interface ListProps<T> {
  list: T[];
  onClick: (item: T) => void;
}

export const TestGenericTypeList = <
  T extends { value: number } | { name: string }
>({
  list,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {list.map((item: T, index: number) => (
        <div key={index} onClick={() => onClick(item)}>
          {item.value}
          {item.name}
        </div>
      ))}
    </div>
  );
};
