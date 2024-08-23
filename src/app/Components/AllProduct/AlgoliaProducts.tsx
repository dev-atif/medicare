import ProductCard from "@/app/Shared/ProductCard";
import searchClient from "@/Helper/SearchClient";
import React from "react";

import {
  InstantSearch,
  SearchBox,
  Hits,
  Pagination,
} from "react-instantsearch-dom";

const Hit = ({ hit }: any) => {
  console.warn(hit); // Check if hit is being received
  return (
    <div>
      <ProductCard data={hit} />
    </div>
  );
};

const AlgoliaProducts = ({ searchValue }: any) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="Alias_Name_Index">
      <SearchBox defaultRefinement={searchValue} className="hidden" />
      <div className="my-8 ">
        <Hits hitComponent={Hit} />
      </div>
      <Pagination />
    </InstantSearch>
  );
};

export default AlgoliaProducts;
