import { useActions } from "hooks/useActions";
import { useSelector } from "hooks/useSelector";
import { ChangeEvent, FormEvent, FC, useState } from "react";

const RepositoriesList: FC = () => {
  const [term, setTerm] = useState("");
  const { data, error, loading } = useSelector((state) => state.repositories);

  const { searchRepositories } = useActions();

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setTerm(event.target.value);

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" name="term" value={term} onChange={onChange} />
        <button type="submit">Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error && data.map((repo) => <ol key={repo}>{repo}</ol>)}
    </div>
  );
};

export default RepositoriesList;
