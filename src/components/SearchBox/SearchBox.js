export const SearchBox = ({  onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        // onChange={e => {
        //   onChange(e.target.value.toLowerCase());
        // }}
        
        name="film"
        placeholder="Search movie"
      />
      <button type="submit">Search</button>
    </form>
  );
};
