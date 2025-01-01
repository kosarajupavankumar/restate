import { View, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams, usePathname } from "expo-router";
import { useDebouncedCallback } from "use-debounce";
import icons from "@/constants/icons";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query || "");

  // Debounced callback to update the query params
  const debouncedSearch = useDebouncedCallback(
    (text: string) => {
      router.setParams({ query: text });
    },
    500 // 500ms debounce delay
  );

  const handleSearch = (query: string) => {
    setSearch(query); // Update the search state
    debouncedSearch(query); // Update the URL params after debounce
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border-primary-100 mt-5 py-2">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        {/* Search Icon */}
        <Image source={icons.search} className="size-5" />
        {/* Search Input */}
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for anything"
          className="text-sm font-rubik text-black-300 ml-2 flex-1"
        />
      </View>

      {/* Filter Icon */}
      <TouchableOpacity>
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
