import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HeaderTabs = ({ activeTab, setActiveTab }) => {

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeaderButton text="Pickup" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
};

const HeaderButton = ({ text, btnColor, textColor, setActiveTab, activeTab }) => {
  const activetedTab = activeTab === text;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activetedTab ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        margin: 3
      }}
      onPress={() => setActiveTab(text)}
    >
      <Text style={{ color: activetedTab ? "white" : "black", fontSize: 15, fontWeight: 'bold' }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default HeaderTabs;
