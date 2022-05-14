import { IconButton, InputAdornment, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { debouce } from "../../utils";
import * as actions from "../../store/actions";

const SearchField = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const isFirstRender = useRef(true);

  const getSubs = (value) => {
    dispatch(actions.getSubsAsync(value));
  };

  const getSubsDebouced = useMemo(() => debouce(getSubs, 350), []);

  useEffect(() => {
    const fn = isFirstRender.current ? getSubs : getSubsDebouced;

    fn(search);

    isFirstRender.current = false;
  }, [search]);

  return (
    <TextField
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Поиск"
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              disabled={!search}
              onClick={() => setSearch("")}
              edge="end"
            >
              {search ? <ClearIcon /> : <SearchIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
export default SearchField;
