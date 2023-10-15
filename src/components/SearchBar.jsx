import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }


  }

  return(

    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{
      borderRadius: 15,
      border: "1px solid #e3e3e3",
      pl: 2,
      boxShadow: "none",
      mr: { sm: 5 },
    }}
  >
    <input
      className="search-bar"
      placeholder="search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <IconButton type="submit" sx={{ P: "10px", color: "orangered" }}>
      <Search />
    </IconButton>
  </Paper>


  )
}


  

export default SearchBar;
