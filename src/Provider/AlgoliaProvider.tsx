"use client";
import searchClient from "@/Helper/SearchClient";
import React, { Children } from "react";
import { InstantSearch } from "react-instantsearch-dom";

interface IProp {
  children: React.ReactNode;
}
const AlgoliaProvider = ({ children }: IProp) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="Alias_Name_Index">
      {children}
    </InstantSearch>
  );
};

export default AlgoliaProvider;
