import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";

import { categories } from "@/constants/data";
import { router } from "expo-router";

const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = categories.map((category) => category.title);

  const handleFilterPress = (filter: string) => {
    if (selectedFilter === filter) {
      setSelectedFilter("All");
      router.setParams({ filter: "All" });
      return;
    }
    setSelectedFilter(filter);
    router.setParams({ filter: filter });
  };

  return (
    <View className="mt-5">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {filters.map((filter, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleFilterPress(filter)}
            style={{
              marginRight: 15,
              paddingVertical: 8,
              paddingHorizontal: 15,
              borderRadius: 20,
              backgroundColor:
                selectedFilter === filter ? "#4CAF50" : "#E0E0E0",
            }}
          >
            <Text
              style={{
                color: selectedFilter === filter ? "#FFF" : "#000",
                fontSize: 14,
                fontWeight: "500",
              }}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Filters;
